import Link from "next/link";
import Image from "next/image";
import { Heart, Leaf, Users, Globe, ArrowRight, Award, BookOpen, Sprout } from "lucide-react";

const values = [
  { icon: Leaf, title: "Βιωσιμότητα", desc: "Ζούμε και δρούμε σε αρμονία με τη φύση, προστατεύοντας τα οικοσυστήματα." },
  { icon: Heart, title: "Συμπόνια", desc: "Αγάπη για τα ζώα, τους ανθρώπους και τον πλανήτη καθοδηγεί κάθε μας απόφαση." },
  { icon: Users, title: "Κοινότητα", desc: "Δουλεύουμε μαζί με τους κατοίκους του Ζωγράφου για κοινό καλό." },
  { icon: Globe, title: "Δικαιοσύνη", desc: "Παλεύουμε για ίση πρόσβαση σε υγιεινή τροφή και σεβασμό στα ζώα." },
];

const milestones = [
  { year: "2019", event: "Ξεκινάμε ως αυτοοργανωμένη συλλογικότητα εθελοντών στον Ζωγράφου — τροφοδοσία και πρώτες στειρώσεις." },
  { year: "2020", event: "Έναρξη καθημερινής τροφοδοσίας σε 15 σημεία της γειτονιάς, δίκτυο 30+ εθελοντών." },
  { year: "2021", event: "Δημιουργία κτηνιατρικού δικτύου εθελοντών – 100+ στειρώσεις. Πρώτες διασώσεις αγροτικών ζώων." },
  { year: "2022", event: "Εγκαίνια του vegan αγροκτήματος κοινότητας. Φιλοξενία διασωσμένων κουνελιών, χήνων και χοίρων." },
  { year: "2023", event: "Επίσημη ίδρυση της ΜΚΟ Zografou Stray – Vegan Farm. Έναρξη κατασκευής υποδομής για σκύλους υιοθεσίας." },
  { year: "2024", event: "280+ επιτυχημένες υιοθεσίες. Διάσωση ζώων από πλημμύρες και φωτιές." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/vegan-farm-collage.jpeg"
            alt="Vegan Farm — η ομάδα και τα ζώα μας"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Η Ιστορία μας
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Σχετικά με εμάς</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Από το 2019 δρούμε στον Ζωγράφου Αθήνας ως αυτοοργανωμένη συλλογικότητα. Το 2023 αποκτήσαμε επίσημη νομική υπόσταση ως ΜΚΟ. Είμαστε εθελοντές, γείτονες και αγωνιστές.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-3xl p-8">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Η Αποστολή μας</h2>
              <p className="text-gray-600 leading-relaxed">
                Να περισυλλέγουμε, να φροντίζουμε και να βρίσκουμε σπίτι στα αδέσποτα ζώα του Ζωγράφου. Παράλληλα, να χτίζουμε μια βιώσιμη, vegan κοινότητα μέσα από εκπαίδευση, αγρόκτημα και συλλογική δράση.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-3xl p-8">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Το Όραμά μας</h2>
              <p className="text-gray-600 leading-relaxed">
                Μια γειτονιά όπου κανένα ζώο δεν πεινάει ή υποφέρει, και κάθε κάτοικος έχει πρόσβαση σε φρέσκα, βιολογικά λαχανικά. Ένας κόσμος χωρίς εκμετάλλευση ζώων και με σεβασμό στη φύση.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Τι Πιστεύουμε</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Οι Αξίες μας</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Το Ταξίδι μας</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Σταθμοί</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-100" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 relative">
                  <div className="bg-green-600 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex-1 border border-gray-100">
                    <span className="text-green-600 font-bold text-sm">{m.year}</span>
                    <p className="text-gray-700 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">Αναγνώριση</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Βραβεία & Διακρίσεις</h2>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-48 shrink-0 rounded-2xl overflow-hidden border border-yellow-200 shadow-sm">
              <Image
                src="/images/award-ministry.jpeg"
                alt="Βράβευση από Υπουργείο Εσωτερικών"
                width={200}
                height={280}
                className="object-cover w-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-6 w-6 text-yellow-600 shrink-0" />
                <span className="font-bold text-yellow-800 text-lg">Βράβευση «Ηρωικές Καρδιές» 2025</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ο φορέας μας <strong>Vegan Farm Animal Liberation</strong> βραβεύτηκε από την <strong>Ειδική Γραμματεία για την Προστασία Ζώων Συντροφίας</strong> του Υπουργείου Εσωτερικών, στην 1η Επίσημη Εκδήλωση «Ηρωικές Καρδιές».
              </p>
              <p className="text-gray-600 text-sm">
                Η εκδήλωση πραγματοποιήθηκε στις <strong>5 Δεκεμβρίου 2025</strong> στο Συνεδριακό Κέντρο Εθνικής Ασφαλιστικής, Λεωφόρος Συγγρού 103, Αθήνα — Παγκόσμια Ημέρα Εθελοντή.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: "ΜΚΟ από 2023" },
              { icon: BookOpen, label: "Δράση από 2019" },
              { icon: Users, label: "50+ Εθελοντές" },
              { icon: Leaf, label: "100% Vegan Δράση" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-4">
                  <Icon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Γίνε μέρος της Αποστολής μας</h2>
          <p className="text-green-100 mb-6">Είτε δωρίσεις, εθελοντεύσεις ή απλά μοιραστείς τη δράση μας — κάθε βοήθεια μετράει.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-3 rounded-full transition-colors">
              Κάνε Δωρεά
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 justify-center">
              Επικοινώνησε μαζί μας <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
