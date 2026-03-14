"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { key: "general", label: "Γενικό" },
  { key: "volunteer", label: "Εθελοντισμός" },
  { key: "partnership", label: "Συνεργασία" },
  { key: "donation", label: "Δωρεά" },
  { key: "press", label: "Τύπος" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "general" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cat-garden.jpeg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-green-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Επικοινωνία
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Επικοινωνήστε μαζί μας</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Θέλεις να εθελοντεύσεις, να συνεργαστείς, να δωρίσεις ή απλά να μάθεις περισσότερα; Χαιρόμαστε να σε ακούσουμε.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Στοιχεία Επικοινωνίας</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Η ομάδα μας είναι εδώ για να απαντήσει σε ερωτήσεις, να εξερευνήσει συνεργασίες και να καλωσορίσει νέους εθελοντές. Απαντάμε εντός 1–2 εργάσιμων ημερών.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Διεύθυνση", value: "Ζωγράφου, Αθήνα 15772" },
                  { icon: Mail, label: "Email", value: "info@zografoustray.gr" },
                  { icon: Phone, label: "Τηλέφωνο", value: "210 123 4567" },
                  { icon: Clock, label: "Ώρες", value: "Δευ–Παρ: 10πμ–6μμ" },
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
                <h3 className="font-bold text-gray-900 mb-1">Τραπεζική Κατάθεση</h3>
                <div className="space-y-2 mt-3">
                  {[
                    { label: "Δικαιούχος", value: "Φιλοζωϊκός Σύλλογος Ζωγράφου Αττικής – Αδεσποτάκια Ζωγράφου" },
                    { label: "Τράπεζα", value: "Τράπεζα Πειραιώς" },
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
                <h3 className="font-bold text-gray-900 mb-2">Ακολούθησέ μας</h3>
                <p className="text-sm text-gray-500 mb-3">Γίνε μέλος της κοινότητάς μας στο Facebook.</p>
                <a
                  href="https://www.facebook.com/groups/759008432624505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  Κοινότητα Facebook
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center flex flex-col items-center justify-center min-h-80">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Το μήνυμά σου εστάλη!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Ευχαριστούμε που επικοινώνησες. Η ομάδα μας θα σου απαντήσει εντός 1–2 εργάσιμων ημερών.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "", type: "general" }); }}
                    className="mt-6 text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Στείλε νέο μήνυμα
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Στείλε μας Μήνυμα</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Είδος αιτήματος</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ονοματεπώνυμο *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Μαρία Παπαδοπούλου"
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
                          placeholder="maria@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Θέμα *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Πώς μπορούμε να σε βοηθήσουμε;"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Μήνυμα *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Πες μας περισσότερα..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      Αποστολή Μηνύματος <Send className="h-4 w-4" />
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Με την αποστολή του φόρμα αποδέχεσαι την Πολιτική Απορρήτου μας.
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
