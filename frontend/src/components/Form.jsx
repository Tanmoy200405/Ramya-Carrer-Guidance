import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    school: "",
    stream: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Form Submitted Successfully!");

    // reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      fatherName: "",
      motherName: "",
      school: "",
      stream: "",
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F0] px-4">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">

        {/* HEADING */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[var(--primary)] mb-6">
          Student Registration Form
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NAME */}
          <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />

          {/* EMAIL */}
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />

          {/* PHONE */}
          <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />

          {/* FATHER NAME */}
          <Input label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} />

          {/* MOTHER NAME */}
          <Input label="Mother Name" name="motherName" value={formData.motherName} onChange={handleChange} />

          {/* SCHOOL */}
          <Input label="School Name" name="school" value={formData.school} onChange={handleChange} />

          {/* STREAM */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Stream
            </label>
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            >
              <option value="">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>

          {/* SUBMIT */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--secondary)] active:bg-[var(--secondary)] active:scale-95 transition-all duration-300"
            >
              Submit
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

/* 🔥 REUSABLE INPUT COMPONENT */
const Input = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      />
    </div>
  );
};

export default Form;