"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { key: "general", label: "General" },
  { key: "volunteer", label: "Volunteering" },
  { key: "partnership", label: "Partnership" },
  { key: "donation", label: "Donation" },
  { key: "press", label: "Press" },
];

export default function ContactEnPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "general" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Want to volunteer, partner with us, donate, or simply learn more? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team is here to answer questions, explore partnerships, and welcome new volunteers. We respond within 1–2 business days.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "Zografou, Athens 15772" },
                  { icon: Mail, label: "Email", value: "info@zografoustray.gr" },
                  { icon: Phone, label: "Phone", value: "+30 210 123 4567" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 10am–6pm" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-2.5 shrink-0 mt-0.5">
                        <Icon className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                        <p className="text-gray-700 text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-1">Bank Transfer</h3>
                <div className="space-y-2 mt-3">
                  {[
                    { label: "Beneficiary", value: "Φιλοζωϊκός Σύλλογος Ζωγράφου Αττικής – Αδεσποτάκια Ζωγράφου" },
                    { label: "Bank", value: "Piraeus Bank" },
                    { label: "IBAN", value: "GR19 0171 0130 0060 1316 9879 105" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-blue-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-800 text-xs font-medium break-all">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
                <p className="text-sm text-gray-500 mb-3">Join our community on Facebook.</p>
                <a
                  href="https://www.facebook.com/groups/759008432624505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  Facebook Community
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center flex flex-col items-center justify-center min-h-80">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "", type: "general" }); }}
                    className="mt-6 text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type of enquiry</label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map(({ key, label }) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setForm({ ...form, type: key })}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              form.type === key
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-green-50"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us more..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form you accept our Privacy Policy.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
