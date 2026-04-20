'use client';
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Send us a Message</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone (Optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
          <select
            name="subject"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="doctors">Doctor Information</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea
            rows={5}
            name="message"
            placeholder="How can we help you?"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Send Message
        </button>
      </form>

      {/* Display Submitted Data */}
{submittedData && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in-95">
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-3 rounded-full">
          <CheckCircle className="text-green-600" size={28} />
        </div>
      </div>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Message Sent 🎉
      </h3>

      {/* Message */}
      <p className="text-slate-600 text-sm mb-4">
        Thank you <span className="font-medium text-slate-900">
          {submittedData.firstName} {submittedData.lastName}
        </span>, we’ve received your message and will get back to you shortly.
      </p>

      {/* Button */}
      <button
        onClick={() => setSubmittedData(null)}
        className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition-all duration-200 shadow-md shadow-blue-600/20"
      >
        Done
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default ContactForm;