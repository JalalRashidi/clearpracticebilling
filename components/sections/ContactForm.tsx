'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import api from "@/libs/api";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Assuming your API expects the formData object
      await api.post("/v1/contact/query", formData);
      setSubmittedData(formData);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 relative">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Send us a Message</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              placeholder="john@example.com"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone Field (Optional) */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="+1 (555) 000-0000"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="How can we help?"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea
            required
            rows={5}
            name="message"
            value={formData.message}
            placeholder="Tell us more about your inquiry..."
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Success Modal */}
      {submittedData && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="flex justify-center mb-5">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="text-green-600" size={32} />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Message Sent!
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{submittedData.name}</span>. 
              We’ve received your message and our team will get back to you shortly.
            </p>

            <button
              onClick={() => setSubmittedData(null)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;