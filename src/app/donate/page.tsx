"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, CheckCircle, AlertCircle, User, Mail, MessageSquare } from "lucide-react";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

const CAMPAIGNS: Record<string, string> = {
  "1": "Community Seed Library",
  "2": "Vegan Farmer Training Program",
  "3": "Urban Rooftop Garden Initiative",
  "4": "School Vegan Gardens Program",
  "5": "Drought-Resistant Crop Research",
  "6": "Emergency Food Relief Fund",
};

const IMPACT: Record<number, string> = {
  10: "Provides seeds for one family garden",
  25: "Feeds a family for one week",
  50: "Funds one day of farmer training",
  100: "Trains one farmer in sustainable practices",
  250: "Installs one raised garden bed in a school",
  500: "Builds one community composting system",
};

function DonateContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("campaign") || "";
  const typeParam = searchParams.get("type") || "once";

  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(typeParam === "monthly");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const campaignName = campaignId ? (CAMPAIGNS[campaignId] ?? "General Fund") : "General Fund";
  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    if (!finalAmount || finalAmount < 1) {
      setError("Please select or enter a donation amount.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-5">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {name}!</h1>
          <p className="text-gray-500 mb-6">
            Your {isMonthly ? "monthly" : ""} pledge of{" "}
            <span className="font-bold text-green-700">${finalAmount}</span> to{" "}
            <span className="font-semibold">{campaignName}</span> has been received.
            We will be in touch at <span className="font-medium">{email}</span> with next steps.
          </p>
          <div className="bg-green-50 rounded-2xl p-5 text-left space-y-3 mb-6">
            <p className="text-sm font-bold text-green-800">What happens next?</p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              Our team will contact you within 24 hours with payment instructions.
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              You will receive a receipt and tax deduction certificate.
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              {isMonthly ? "Your monthly giving will be set up securely." : "100% of your donation goes directly to programs."}
            </div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); setCustomAmount(""); }}
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            Make another donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-10 w-10 mx-auto mb-4 text-green-300" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Make a Donation</h1>
          {campaignName !== "General Fund" && (
            <p className="text-green-200">Supporting: <span className="font-semibold text-white">{campaignName}</span></p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">

            {/* Frequency */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Donation Frequency</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                    !isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                    isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                  }`}
                >
                  Monthly{" "}
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                    Popular
                  </span>
                </button>
              </div>
            </div>

            {/* Preset Amounts */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Select Amount (USD)</p>
              <div className="grid grid-cols-3 gap-3">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => { setAmount(preset); setCustomAmount(""); }}
                    className={`py-3 rounded-xl border-2 text-sm font-bold transition-colors ${
                      amount === preset && !customAmount
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-600 hover:border-green-300"
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Or enter a custom amount</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                />
              </div>
            </div>

            {/* Impact */}
            {finalAmount >= 1 && (
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  {IMPACT[finalAmount] ?? `Your $${finalAmount} donation will make a real difference in our programs.`}
                </p>
              </div>
            )}

            <hr className="border-gray-100" />

            {/* Personal Details */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Your Details</p>
              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Donation to:</span>
                <span className="font-medium text-gray-800">{campaignName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Frequency:</span>
                <span className="font-medium text-gray-800">{isMonthly ? "Monthly" : "One-time"}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="font-semibold text-gray-800">Amount:</span>
                <span className="font-bold text-green-700 text-base">
                  ${finalAmount || "—"}{isMonthly ? "/month" : ""}
                </span>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Heart className="h-5 w-5" />
              {isMonthly ? `Pledge $${finalAmount || "—"}/month` : `Donate $${finalAmount || "—"}`}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Our team will contact you within 24 hours to complete your donation securely.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
      <DonateContent />
    </Suspense>
  );
}
