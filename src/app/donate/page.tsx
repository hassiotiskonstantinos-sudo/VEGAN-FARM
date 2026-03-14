"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, CheckCircle, AlertCircle, User, Mail, MessageSquare } from "lucide-react";

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

const IMPACT: Record<number, string> = {
  10: "Καλύπτει τη διατροφή 5 αδέσποτων για μια εβδομάδα",
  25: "Χρηματοδοτεί έναν εμβολιασμό και αποπαρασίτωση",
  50: "Καλύπτει μια στείρωση αδέσποτης γάτας",
  100: "Χρηματοδοτεί επείγουσα κτηνιατρική επίσκεψη",
  250: "Ξεκινά ένα νέο σταθμό τροφοδοσίας στη γειτονιά",
  500: "Εξοπλίζει χώρο φιλοξενίας για αδέσποτα",
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

  const campaignName = campaignId ? (CAMPAIGNS[campaignId] ?? "Γενικό Ταμείο") : "Γενικό Ταμείο";
  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Παρακαλώ συμπλήρωσε το όνομα και το email σου.");
      return;
    }
    if (!finalAmount || finalAmount < 1) {
      setError("Παρακαλώ επίλεξε ή εισήγαγε ποσό δωρεάς.");
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ευχαριστούμε, {name}!</h1>
          <p className="text-gray-500 mb-6">
            Η {isMonthly ? "μηνιαία " : ""}δωρεά σου{" "}
            <span className="font-bold text-green-700">€{finalAmount}</span> για{" "}
            <span className="font-semibold">{campaignName}</span> έχει ληφθεί.
            Θα επικοινωνήσουμε μαζί σου στο <span className="font-medium">{email}</span> με τα επόμενα βήματα.
          </p>
          <div className="bg-green-50 rounded-2xl p-5 text-left space-y-3 mb-6">
            <p className="text-sm font-bold text-green-800">Τι γίνεται στη συνέχεια;</p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              Η ομάδα μας θα επικοινωνήσει μαζί σου εντός 24 ωρών με οδηγίες πληρωμής.
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              Θα λάβεις απόδειξη και πιστοποιητικό για φορολογική έκπτωση.
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              {isMonthly ? "Η μηνιαία δωρεά σου θα ρυθμιστεί με ασφάλεια." : "Το 100% της δωρεάς σου πηγαίνει απευθείας στα ζώα."}
            </div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); setCustomAmount(""); }}
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            Κάνε άλλη δωρεά
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Κάνε Δωρεά</h1>
          {campaignName !== "Γενικό Ταμείο" && (
            <p className="text-green-200">Για: <span className="font-semibold text-white">{campaignName}</span></p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Συχνότητα Δωρεάς</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                    !isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                  }`}
                >
                  Εφάπαξ
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`py-3 rounded-xl border-2 text-sm font-semibold transition-colors ${
                    isMonthly ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-500 hover:border-green-300"
                  }`}
                >
                  Μηνιαία{" "}
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                    Δημοφιλής
                  </span>
                </button>
              </div>
            </div>

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

            {finalAmount >= 1 && (
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  {IMPACT[finalAmount] ?? `Η δωρεά σου €${finalAmount} θα κάνει πραγματική διαφορά στη ζωή των αδέσποτων.`}
                </p>
              </div>
            )}

            <hr className="border-gray-100" />

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Τα Στοιχεία σου</p>
              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Ονοματεπώνυμο"
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
                    placeholder="Διεύθυνση Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Μήνυμα (προαιρετικό)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Δωρεά για:</span>
                <span className="font-medium text-gray-800">{campaignName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Συχνότητα:</span>
                <span className="font-medium text-gray-800">{isMonthly ? "Μηνιαία" : "Εφάπαξ"}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="font-semibold text-gray-800">Ποσό:</span>
                <span className="font-bold text-green-700 text-base">
                  €{finalAmount || "—"}{isMonthly ? "/μήνα" : ""}
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
              {isMonthly ? `Δωρεά €${finalAmount || "—"}/μήνα` : `Δώρισε €${finalAmount || "—"}`}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Η ομάδα μας θα επικοινωνήσει μαζί σου εντός 24 ωρών για να ολοκληρώσει τη δωρεά σου με ασφάλεια.
            </p>
          </form>
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
