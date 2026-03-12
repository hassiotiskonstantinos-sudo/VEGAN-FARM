"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Clock } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Κτηνιατρικό Ταμείο Αδέσποτων",
    description: "Αποστειρώσεις, εμβολιασμοί και επείγουσες χειρουργικές επεμβάσεις για αδέσποτα ζώα του Ζωγράφου. Κάθε ζώο που περισυλλέγουμε χρειάζεται κτηνιατρική φροντίδα πριν βρει σπίτι.",
    goal: 8000,
    raised: 5200,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
    category: "Κτηνιατρική",
    urgent: true,
    daysLeft: 10,
    donors: 98,
  },
  {
    id: 2,
    title: "Vegan Αγρόκτημα Κοινότητας",
    description: "Δημιουργία βιώσιμου αγροκτήματος για εκπαίδευση παιδιών και παραγωγή φρέσκων λαχανικών για τη γειτονιά, χωρίς εκμετάλλευση ζώων.",
    goal: 15000,
    raised: 9400,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    category: "Αγρόκτημα",
    urgent: false,
    daysLeft: 25,
    donors: 143,
  },
  {
    id: 3,
    title: "Καταφύγιο Αδέσποτων Γάτων",
    description: "Ανέγερση ασφαλούς καταφυγίου για γάτες που ζουν στους δρόμους του Ζωγράφου. Χώρος ζεστός, ασφαλής και προσωρινός μέχρι την εύρεση οικογένειας.",
    goal: 12000,
    raised: 4800,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80",
    category: "Καταφύγιο",
    urgent: false,
    daysLeft: 40,
    donors: 67,
  },
  {
    id: 4,
    title: "Εκπαίδευση Παιδιών & Ζώα",
    description: "Εκπαιδευτικό πρόγραμμα σε σχολεία του Ζωγράφου για τη φροντίδα ζώων, τη vegan διατροφή και την κλιματική αλλαγή.",
    goal: 5000,
    raised: 1800,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    category: "Εκπαίδευση",
    urgent: false,
    daysLeft: 50,
    donors: 34,
  },
  {
    id: 5,
    title: "Τρόφιμα για Αδέσποτα Χειμώνα",
    description: "Εξασφάλιση ζεστού φαγητού και νερού για αδέσποτα ζώα που ζουν έξω τον χειμώνα στον Ζωγράφου και τις γύρω περιοχές.",
    goal: 3000,
    raised: 2700,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    category: "Τρόφιμα",
    urgent: true,
    daysLeft: 7,
    donors: 201,
  },
  {
    id: 6,
    title: "Αμαξίδιο για Παράλυτα Ζώα",
    description: "Αγορά ορθοπεδικών αμαξιδίων για σκύλους με κινητικά προβλήματα που περισυλλέξαμε από ατυχήματα.",
    goal: 2500,
    raised: 1100,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
    category: "Εξοπλισμός",
    urgent: false,
    daysLeft: 30,
    donors: 45,
  },
];

const categories = ["Όλα", "Κτηνιατρική", "Αγρόκτημα", "Καταφύγιο", "Εκπαίδευση", "Τρόφιμα", "Εξοπλισμός"];

export default function CampaignsPage() {
  const [activeCategory, setActiveCategory] = useState("Όλα");

  const filtered = activeCategory === "Όλα"
    ? campaigns
    : campaigns.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Ενεργές Εκστρατείες
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Στήριξε τις Δράσεις μας</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Κάθε εκστρατεία έχει συγκεκριμένο στόχο και άμεσο αντίκτυπο στα ζώα και την κοινότητά μας.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">Δεν υπάρχουν εκστρατείες σε αυτή την κατηγορία.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((campaign) => {
                const pct = Math.round((campaign.raised / campaign.goal) * 100);
                return (
                  <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                    <div className="h-48 relative">
                      <Image src={campaign.image} alt={campaign.title} fill className="object-cover" />
                      {campaign.urgent && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">ΕΠΕΙΓΟΝ</span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{campaign.category}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />{campaign.daysLeft} μέρες
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{campaign.title}</h3>
                      <p className="text-gray-500 text-sm mb-4 flex-1">{campaign.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm font-medium mb-1">
                          <span className="text-green-700">€{campaign.raised.toLocaleString("el-GR")} συγκεντρώθηκαν</span>
                          <span className="text-gray-400">από €{campaign.goal.toLocaleString("el-GR")}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-green-600 font-medium">{pct}% του στόχου</span>
                          <span className="flex items-center gap-1 text-xs text-gray-400"><Target className="h-3 w-3" />{campaign.donors} δωρητές</span>
                        </div>
                      </div>
                      <Link href={`/donate?campaign=${campaign.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm text-center flex items-center justify-center gap-2 transition-colors">
                        Κάνε Δωρεά <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Έχεις ιδέα για εκστρατεία;</h2>
          <p className="text-gray-500 mb-6">Συνεργαζόμαστε με μέλη της κοινότητας για νέες δράσεις. Επικοινώνησε μαζί μας!</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Επικοινωνία <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
