import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    school: "",
    stream: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post("http://localhost:5000/api/students", formData);
      setStatus({ type: "success", message: response.data.message });
      setFormData({
        name: "",
        email: "",
        phone: "",
        fatherName: "",
        motherName: "",
        school: "",
        stream: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-24 bg-[#F5F5F0] flex justify-center relative overflow-hidden">
      
      {/* 🔹 DOT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(#002147 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="w-[90%] max-w-4xl bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 relative z-10 border border-gray-100">
        
        {/* HEADING */}
        <div className="text-center mb-12 animate-fadeUp">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] font-bold mb-4">
            Start Your <span className="text-[var(--tertiary)] italic">Application</span>
          </h2>
          <p className="text-gray-500 font-serif italic max-w-lg mx-auto leading-relaxed">
             Take the first step towards your dream career. Fill out the details below and our experts will reach out to you.
          </p>
          <p className="text-gray-600 font-medium mt-4">
            For inquiries, contact us at: <span className="text-[var(--tertiary)] font-bold">+91 70441 87556</span>
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Full Name</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange} required
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Email Address</label>
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange} required
              placeholder="e.g. rahul@example.com"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Phone Number</label>
            <input 
              type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* FATHER'S NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Father's Name</label>
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
              type="text" name="motherName" value={formData.motherName} onChange={handleChange} required
              placeholder="Enter Mother's Name"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* SCHOOL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">School Name</label>
            <input 
              type="text" name="school" value={formData.school} onChange={handleChange} required
              placeholder="Your last attended school"
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
            />
          </div>

          {/* STREAM (Select Dropdown) */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Current Stream / Interest</label>
            <select 
              name="stream" value={formData.stream} onChange={handleChange} required
              className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif appearance-none"
            >
              <option value="">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" disabled={loading}
              className="w-full py-5 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 flex justify-center items-center gap-2"
            >
              {loading ? "Submitting..." : "SUBMIT APPLICATION"}
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

export default ContactForm;
