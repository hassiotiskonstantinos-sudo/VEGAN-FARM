"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, Lock, CreditCard, RefreshCw, CheckCircle } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder"
);

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

function CheckoutForm({
  amount,
  isMonthly,
  campaign,
  clientSecret,
}: {
  amount: number;
  isMonthly: boolean;
  campaign: string;
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success?amount=${amount}&campaign=${encodeURIComponent(campaign)}&monthly=${isMonthly}`,
      },
    });

    if (submitError) {
      setError(submitError.message ?? "An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PaymentElement
        options={{
          layout: "tabs",
        }}
      />
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-lg flex items-center justify-center gap-2 transition-colors"
      >
        {loading ? (
          <>
            <RefreshCw className="h-5 w-5 animate-spin" /> Processing...
          </>
        ) : (
          <>
            <Heart className="h-5 w-5" />
            {isMonthly ? `Give $${amount}/month` : `Donate $${amount}`}
          </>
        )}
      </button>
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <Lock className="h-3 w-3" />
        Secured by Stripe · 256-bit SSL encryption
      </div>
    </form>
  );
}

function DonateContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("campaign") || "";
  const typeParam = searchParams.get("type") || "once";

  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(typeParam === "monthly");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [step, setStep] = useState<"choose" | "pay">("choose");
  const [loadingIntent, setLoadingIntent] = useState(false);

  const campaignName = campaignId ? (CAMPAIGNS[campaignId] ?? "General Fund") : "General Fund";

  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  const handleContinue = async () => {
    if (!finalAmount || finalAmount < 1) return;
    setLoadingIntent(true);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(finalAmount * 100),
          campaign: campaignName,
          isMonthly,
        }),
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setStep("pay");
      }
    } catch {
      console.error("Failed to create payment intent");
    }
    setLoadingIntent(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Step Indicator */}
            <div className="flex border-b border-gray-100">
              {["Choose Amount", "Payment Details"].map((label, i) => (
                <div
                  key={label}
                  className={`flex-1 py-3 text-center text-sm font-medium ${
                    step === (i === 0 ? "choose" : "pay")
                      ? "text-green-700 border-b-2 border-green-600"
                      : "text-gray-400"
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs mr-2 ${
                    (i === 0 && step === "pay") ? "bg-green-600 text-white" : "bg-gray-100"
                  }`}>
                    {i === 0 && step === "pay" ? "✓" : i + 1}
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="p-8">
              {step === "choose" ? (
                <div className="space-y-6">
                  {/* One-time vs Monthly */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">Donation Frequency</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setIsMonthly(false)}
                        className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                          !isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        onClick={() => setIsMonthly(true)}
                        className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                          isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                        }`}
                      >
                        Monthly
                        <span className="ml-1.5 text-xs bg-green-600 text-white px-1.5 py-0.5 rounded-full">Popular</span>
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

                  {/* Impact Message */}
                  {(IMPACT[finalAmount] || finalAmount >= 1) && (
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800">
                        {IMPACT[finalAmount] || `Your $${finalAmount} donation will make a real difference in our programs.`}
                      </p>
                    </div>
                  )}

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
                      <span className="font-semibold text-gray-800">Total:</span>
                      <span className="font-bold text-green-700 text-base">
                        ${finalAmount}{isMonthly ? "/month" : ""}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleContinue}
                    disabled={!finalAmount || finalAmount < 1 || loadingIntent}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    {loadingIntent ? (
                      <><RefreshCw className="h-5 w-5 animate-spin" /> Loading...</>
                    ) : (
                      <>Continue to Payment <CreditCard className="h-5 w-5" /></>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Tax-deductible donation · Secure payment via Stripe
                  </p>
                </div>
              ) : (
                clientSecret ? (
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret,
                      appearance: {
                        theme: "stripe",
                        variables: {
                          colorPrimary: "#16a34a",
                          borderRadius: "12px",
                        },
                      },
                    }}
                  >
                    <div className="mb-6 bg-green-50 rounded-xl p-4 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Donating:</span>
                        <span className="font-bold text-green-700 text-lg">
                          ${finalAmount}{isMonthly ? "/month" : ""}
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs mt-1">To: {campaignName}</div>
                    </div>
                    <CheckoutForm
                      amount={finalAmount}
                      isMonthly={isMonthly}
                      campaign={campaignName}
                      clientSecret={clientSecret}
                    />
                    <button
                      onClick={() => setStep("choose")}
                      className="w-full mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ← Back to amount selection
                    </button>
                  </Elements>
                ) : (
                  <div className="text-center py-10 text-gray-500">Loading payment form...</div>
                )
              )}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Lock, label: "Secure Payment", sub: "256-bit SSL" },
              { icon: CreditCard, label: "All Cards Accepted", sub: "Visa, MC, Amex" },
              { icon: Heart, label: "Tax Deductible", sub: "501(c)(3) NGO" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <Icon className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              );
            })}
          </div>
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
