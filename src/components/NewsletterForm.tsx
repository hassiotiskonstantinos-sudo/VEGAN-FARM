"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
        <CheckCircle className="h-5 w-5" />
        Εγγραφήκατε με επιτυχία!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Εισήγαγε το email σου"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
      >
        Εγγραφή
      </button>
    </form>
  );
}
