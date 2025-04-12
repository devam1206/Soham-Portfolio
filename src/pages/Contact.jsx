import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'Contact Form Submission', // Optional: Add a title field
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red- bg-clip-text">
        Contact Me.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">EMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">MESSAGE</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-white hover:bg-[#0a0a0a] hover:text-white hover:ring-1 hover:ring-white text-black font-semibold rounded transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}