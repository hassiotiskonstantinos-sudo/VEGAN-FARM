"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Heart, Landmark } from "lucide-react";

// TODO: Replace with your actual PayPal email or PayPal.me username
const PAYPAL_EMAIL = "YOUR_PAYPAL_EMAIL";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

const CAMPAIGNS: Record<string, string> = {
  "1": "Κτηνιατρικό Ταμείο Αδέσποτων",
  "2": "Vegan Αγρόκτημα Κοινότητας",
  "3": "Καταφύγιο Αδέσποτων Γάτων",
  "4": "Εκπαίδευση Παιδιών & Ζώα",
  "5": "Τρόφιμα για Αδέσποτα Χειμώνα",
  "6": "Αμαξίδιο για Παράλυτα Ζώα",
  "7": "Υποδομή Φιλοξενίας Σκύλων για Υιοθεσία",
  "8": "Διάσωση Παραγωγικών Ζώων",
  "9": "Χώρος για Διασωσμένα Κουνελάκια",
  "10": "Άσυλο για Χήνες & Χοιρινά",
};

function DonateContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("campaign") || "";

  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const campaignName = campaignId ? (CAMPAIGNS[campaignId] ?? "Γενικό Ταμείο") : "Γενικό Ταμείο";
  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  const paypalUrl =
    `https://www.paypal.com/donate/?business=${encodeURIComponent(PAYPAL_EMAIL)}` +
    `&amount=${finalAmount || ""}` +
    `&currency_code=EUR` +
    `&item_name=${encodeURIComponent("Zografou Stray – " + campaignName)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/lamb-feeding.jpeg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-green-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-10 w-10 mx-auto mb-4 text-green-300" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Κάνε Δωρεά</h1>
          {campaignName !== "Γενικό Ταμείο" && (
            <p className="text-green-200 mt-1">
              Για: <span className="font-semibold text-white">{campaignName}</span>
            </p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-md mx-auto px-4 space-y-6">

          {/* Amount selector */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Επίλεξε Ποσό (€)</p>
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
                    €{preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Ή εισήγαγε δικό σου ποσό</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Ποσό"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                />
              </div>
            </div>

            <div className="flex justify-between text-sm pt-1 border-t border-gray-100">
              <span className="text-gray-500">Ποσό δωρεάς:</span>
              <span className="font-bold text-green-700 text-base">€{finalAmount || "—"}</span>
            </div>

            {/* PayPal Button */}
            <a
              href={finalAmount >= 1 ? paypalUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { if (!finalAmount || finalAmount < 1) e.preventDefault(); }}
              className={`flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-lg transition-colors ${
                finalAmount >= 1
                  ? "bg-[#0070ba] hover:bg-[#005ea6] text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z"/>
              </svg>
              Δώρισε με PayPal
            </a>

            <p className="text-xs text-gray-400 text-center">
              Θα μεταφερθείς στο ασφαλές περιβάλλον του PayPal για να ολοκληρώσεις τη δωρεά σου.
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-5 w-5 text-blue-600 shrink-0" />
              <h3 className="font-bold text-blue-900">Απευθείας Τραπεζική Κατάθεση</h3>
            </div>
            <p className="text-sm text-blue-700 mb-4">
              Εναλλακτικά, μπορείς να κάνεις κατάθεση απευθείας στον τραπεζικό λογαριασμό μας:
            </p>
            <div className="space-y-3">
              {[
                { label: "Δικαιούχος", value: "Φιλοζωϊκός Σύλλογος Ζωγράφου Αττικής – Αδεσποτάκια Ζωγράφου" },
                { label: "Τράπεζα", value: "Τράπεζα Πειραιώς" },
                { label: "IBAN", value: "GR19 0171 0130 0060 1316 9879 105" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl px-4 py-3 border border-blue-100">
                  <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="text-gray-800 font-medium text-sm break-all">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-500 mt-3">
              Στην αιτιολογία γράψε το όνομά σου και την εκστρατεία που θέλεις να στηρίξεις.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Φόρτωση...</div>}>
      <DonateContent />
    </Suspense>
  );
}
