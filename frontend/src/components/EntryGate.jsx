import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import gsap from "gsap";

const EntryGate = ({ onUnlock }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    school: "",
    currentStream: "",
    interestStream: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const gateRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      console.log("Submitting formData:", formData);
      // Connect to port 5001 as previously fixed
      const response = await axios.post("http://127.0.0.1:5001/api/students", formData);
      setStatus({ type: "success", message: response.data.message });
      
      // Save to localStorage
      localStorage.setItem("survey_completed", "true");

      // Exit animation
      gsap.to(gateRef.current, {
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: onUnlock,
      });

    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = error.response?.data?.message || error.message || "Connection failed. Please check if the server is running.";
      setStatus({
        type: "error",
        message: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      ref={gateRef} 
      className="fixed inset-0 z-[9999] bg-[var(--neutral)] flex items-center justify-center overflow-y-auto px-4 py-10"
    >
      {/* 🔹 DOT GRID BACKGROUND (Matching Brand Aesthetic) */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(#002147 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div 
        ref={formRef}
        className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 relative z-10 border border-gray-100"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] font-bold mb-4">
            Begin Your <span className="text-[var(--tertiary)] italic">Excellence</span>
          </h2>
          <p className="text-gray-500 font-serif italic max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Please share your academic profile to unlock the full sanctuary of career guidance and personalized advisory.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Full Name <span className="text-red-500">*</span></label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange} required
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Email Address <span className="text-red-500">*</span></label>
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange} required
              placeholder="e.g. rahul@example.com"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Phone Number <span className="text-red-500">*</span></label>
            <input 
              type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* SCHOOL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Current School <span className="text-red-500">*</span></label>
            <input 
              type="text" name="school" value={formData.school} onChange={handleChange} required
              placeholder="Your last attended school"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* FATHER'S NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Father's Name <span className="text-red-500">*</span></label>
            <input 
              type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required
              placeholder="Enter Father's Name"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* MOTHER'S NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Mother's Name</label>
            <input 
              type="text" name="motherName" value={formData.motherName} onChange={handleChange}
              placeholder="Enter Mother's Name"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* STREAM */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Current Stream (10+2) <span className="text-red-500">*</span></label>
            <select 
              name="currentStream" value={formData.currentStream} onChange={handleChange} required
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif appearance-none"
            >
              <option value="">Select Current Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Interest Stream <span className="text-red-500">*</span></label>
            <input 
              type="text" name="interestStream" value={formData.interestStream} onChange={handleChange} required
              placeholder="e.g. Engineering, Management, etc."
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" disabled={loading}
              className="w-full py-5 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 flex justify-center items-center gap-2 uppercase tracking-widest"
            >
              {loading ? "AUTHENTICATING..." : "ENTER PORTAL"}
            </button>
          </div>

          {/* STATUS MESSAGE */}
          {status.message && (
            <div className={`md:col-span-2 text-center p-4 rounded-xl font-bold font-serif ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EntryGate;

