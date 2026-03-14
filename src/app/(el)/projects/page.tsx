"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Περισυλλογή & Υιοθεσία Ζωγράφου",
    location: "Ζωγράφου, Αθήνα",
    status: "Ενεργό",
    year: "2020",
    description: "Συστηματική περισυλλογή αδέσποτων σκύλων και γάτων από τους δρόμους του Ζωγράφου, κτηνιατρική φροντίδα και εύρεση υπεύθυνων οικογενειών.",
    impact: ["320+ ζώα περισυλλέχθηκαν", "280+ επιτυχημένες υιοθεσίες", "100% στείρωση πριν υιοθεσία", "Δίκτυο 50+ αναδόχων"],
    image: "/images/sheep-farm.jpeg",
    category: "Περισυλλογή",
  },
  {
    id: 2,
    title: "Κτηνιατρικό Κέντρο Αδέσποτων",
    location: "Ζωγράφου, Αθήνα",
    status: "Ενεργό",
    year: "2021",
    description: "Δωρεάν κτηνιατρικές υπηρεσίες για αδέσποτα ζώα: εμβολιασμοί, στειρώσεις, επείγουσες επεμβάσεις. Συνεργασία με εθελοντές κτηνίατρους.",
    impact: ["500+ στειρώσεις", "1.200+ εμβολιασμοί", "80+ χειρουργικές επεμβάσεις", "12 εθελοντές κτηνίατροι"],
    image: "/images/lamb-feeding.jpeg",
    category: "Κτηνιατρική",
  },
  {
    id: 3,
    title: "Vegan Αγρόκτημα Κοινότητας",
    location: "Περίχωρα Ζωγράφου",
    status: "Ενεργό",
    year: "2022",
    description: "Βιώσιμο αγρόκτημα χωρίς εκμετάλλευση ζώων. Παραγωγή φρέσκων λαχανικών για τη γειτονιά, εκπαίδευση παιδιών και ενηλίκων στη vegan καλλιέργεια.",
    impact: ["2 στρέμματα καλλιέργειας", "300 κιλά λαχανικά/μήνα", "120 παιδιά εκπαιδεύτηκαν", "40 οικογένειες ωφελούνται"],
    image: "/images/goat-handfed.jpeg",
    category: "Αγρόκτημα",
  },
  {
    id: 4,
    title: "Εκπαιδευτικό Πρόγραμμα Σχολείων",
    location: "Σχολεία Ζωγράφου",
    status: "Ενεργό",
    year: "2023",
    description: "Εκπαιδευτικές επισκέψεις σε σχολεία για τη φροντίδα ζώων, τη vegan διατροφή και την κλιματική κρίση. Εργαστήρια με ζωντανά παραδείγματα.",
    impact: ["8 σχολεία συμμετέχουν", "2.000+ μαθητές", "15 εκπαιδευτικά εργαστήρια", "4 εκπαιδευτικοί επιμορφώθηκαν"],
    image: "/images/baby-goat.jpeg",
    category: "Εκπαίδευση",
  },
  {
    id: 5,
    title: "Χειμερινή Τροφοδοσία Αδέσποτων",
    location: "Ζωγράφου & Γύρω Περιοχές",
    status: "Ενεργό",
    year: "2020",
    description: "Οργανωμένη τροφοδοσία αδέσποτων ζώων καθ' όλη τη διάρκεια του χρόνου, με έμφαση στους χειμερινούς μήνες. Σταθμοί νερού και τροφής σε 30+ σημεία.",
    impact: ["200+ ζώα τρέφονται καθημερινά", "30 σταθμοί τροφοδοσίας", "365 ημέρες τον χρόνο", "50+ εθελοντές τροφοδότες"],
    image: "/images/cat-garden.jpeg",
    category: "Τροφοδοσία",
  },
  {
    id: 6,
    title: "Καταφύγιο & Ανάνηψη Τραυματιών",
    location: "Ζωγράφου, Αθήνα",
    status: "Ενεργό",
    year: "2021",
    description: "Χώρος φιλοξενίας για τραυματισμένα ή άρρωστα αδέσποτα που χρειάζονται ανάρρωση. Εξοπλισμένος με κλωβούς, θερμαντικές συσκευές και ιατρικό εξοπλισμό.",
    impact: ["150+ ζώα φιλοξενήθηκαν", "95% ποσοστό επιβίωσης", "24/7 φύλαξη εθελοντών", "Πλήρης ιατρικός εξοπλισμός"],
    image: "/images/founder-with-lamb.jpeg",
    category: "Καταφύγιο",
  },
  {
    id: 7,
    title: "Κατασκευή Υποδομής για Σκύλους Υιοθεσίας",
    location: "Ζωγράφου, Αθήνα",
    status: "Σε Εξέλιξη",
    year: "2024",
    description: "Κατασκευή κλωβών, στεγάστρων και χώρων άσκησης ώστε να φιλοξενούνται με αξιοπρέπεια οι σκύλοι που αναμένουν υιοθεσία. Έχουμε συγκεντρώσει €10.000 — χρειαζόμαστε ακόμα €5.000 για την ολοκλήρωση.",
    impact: ["Χωρητικότητα 30+ σκύλων", "Ασφαλείς ατομικοί χώροι", "Χώρος κοινωνικοποίησης", "Στόχος: ολοκλήρωση 2025"],
    image: "/images/vegan-farm-collage.jpeg",
    category: "Υποδομή",
  },
  {
    id: 8,
    title: "Διάσωση Παραγωγικών Ζώων",
    location: "Αττική & Γύρω Περιοχές",
    status: "Ενεργό",
    year: "2022",
    description: "Περισυλλογή και αποκατάσταση ζώων πρώην παραγωγής — χοίροι, κατσίκες, πουλερικά — από φωτιές, πλημμύρες, κακοποίηση και παράνομα εκτροφεία. Τους δίνουμε ζωή με αξιοπρέπεια.",
    impact: ["40+ παραγωγικά ζώα διασώθηκαν", "Συνεργασία με πυροσβεστική", "Κτηνιατρική αποκατάσταση", "Μόνιμο άσυλο για ζώα αδύνατο να υιοθετηθούν"],
    image: "/images/pigs-farm.jpeg",
    category: "Διάσωση",
  },
  {
    id: 9,
    title: "Άσυλο Κουνελιών, Χήνων & Χοιρινών",
    location: "Αγρόκτημα Ζωγράφου",
    status: "Ενεργό",
    year: "2023",
    description: "Ειδικά διαμορφωμένοι χώροι για κουνέλια διασωσμένα από κακοποίηση, χήνες από πυρκαγιές και χοιρινά από παράνομα εκτροφεία. Βελτιώνουμε συνεχώς τις εγκαταστάσεις.",
    impact: ["25+ κουνέλια φιλοξενούνται", "8 χήνες από πυρκαγιές", "4 χοιρινά σε μόνιμο άσυλο", "Χώροι βελτίωσης σε εξέλιξη"],
    image: "/images/goats-shelter.jpeg",
    category: "Διάσωση",
  },
];

const categories = ["Όλα", "Περισυλλογή", "Κτηνιατρική", "Αγρόκτημα", "Εκπαίδευση", "Τροφοδοσία", "Καταφύγιο", "Υποδομή", "Διάσωση"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Όλα");

  const filtered = activeCategory === "Όλα"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/sheep-farm.jpeg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-green-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Στο Πεδίο
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Τα Προγράμματά μας</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Πραγματικά προγράμματα, πραγματικά αποτελέσματα. Δείτε τι κάνουμε κάθε μέρα για τα ζώα και την κοινότητα του Ζωγράφου.
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
            <p className="text-center text-gray-400 py-20">Δεν υπάρχουν προγράμματα σε αυτή την κατηγορία.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filtered.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-48 relative">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${
                      project.status === "Ενεργό"
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="h-3 w-3" /> {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" /> Από {project.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="bg-green-50 rounded-xl p-4 mb-4">
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Αποτελέσματα</p>
                      <ul className="space-y-1.5">
                        {project.impact.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/donate?project=${project.id}`}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full text-sm text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      Στήριξε το Πρόγραμμα <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Θες να συνεργαστούμε;</h2>
          <p className="text-gray-500 mb-6">
            Είσαι οργανισμός, σχολείο ή επιχείρηση που θέλει να στηρίξει τη δράση μας; Επικοινώνησε μαζί μας!
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Επικοινωνία <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
