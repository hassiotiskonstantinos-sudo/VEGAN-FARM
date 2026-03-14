import Link from "next/link";
import Image from "next/image";
import { Heart, PawPrint, Users, Home as HomeIcon, ArrowRight, CheckCircle, TrendingUp, Star } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const stats = [
  { label: "Ζώα Περισυλλέχθηκαν", value: "1.200+", icon: PawPrint },
  { label: "Επιτυχημένες Υιοθεσίες", value: "850+", icon: Heart },
  { label: "Εθελοντές", value: "300+", icon: Users },
  { label: "Οικογένειες Βοηθήθηκαν", value: "120+", icon: HomeIcon },
];

const campaigns = [
  {
    id: 1,
    title: "Κτηνιατρικό Ταμείο Αδέσποτων",
    description: "Στειρώσεις, εμβολιασμοί και επείγουσες χειρουργικές επεμβάσεις για αδέσποτα ζώα του Ζωγράφου.",
    goal: 8000,
    raised: 5200,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    category: "Κτηνιατρική",
    urgent: true,
  },
  {
    id: 2,
    title: "Vegan Αγρόκτημα Κοινότητας",
    description: "Δημιουργία βιώσιμου αγροκτήματος για εκπαίδευση παιδιών και παραγωγή τροφίμων για τη γειτονιά.",
    goal: 15000,
    raised: 9400,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    category: "Αγρόκτημα",
    urgent: false,
  },
  {
    id: 7,
    title: "Υποδομή Φιλοξενίας Σκύλων — ΕΠΕΙΓΟΝ",
    description: "Χρειαζόμαστε €5.000 ακόμα για να ολοκληρώσουμε την κατασκευή χώρου φιλοξενίας σκύλων προς υιοθεσία. Έχουμε ήδη δώσει €10.000!",
    goal: 5000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "Υποδομή",
    urgent: true,
  },
];

const testimonials = [
  {
    name: "Μαρία Κ.",
    role: "Εθελόντρια",
    quote: "Χάρη στο Zografou Stray βρήκα την αδερφή μου — τη σκυλίτσα μου Ρόζα. Η δουλειά που κάνουν αυτοί οι άνθρωποι είναι εκπληκτική.",
    stars: 5,
  },
  {
    name: "Γιώργης Π.",
    role: "Γονέας",
    quote: "Τα παιδιά μου έμαθαν τη σημασία της φροντίδας των ζώων μέσα από το πρόγραμμα του αγροκτήματος. Αξέχαστη εμπειρία!",
    stars: 5,
  },
  {
    name: "Ελένη Σ.",
    role: "Γείτονας",
    quote: "Επιτέλους μια οργάνωση που κάνει πράγματα στη γειτονιά μας. Τα αδέσποτα φροντίζονται και η κοινότητα ενώνεται.",
    stars: 5,
  },
];

const whyUs = [
  "100% των δωρεών πάνε στα ζώα και τα προγράμματα",
  "Διαφανής οικονομική διαχείριση",
  "Καταχωρημένη ΜΚΟ στην Ελλάδα",
  "300+ ενεργοί εθελοντές στον Ζωγράφου",
  "Συνεργασία με κτηνιάτρους της περιοχής",
  "Δράση από το 2019, ΜΚΟ από το 2023",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white overflow-hidden min-h-[560px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1600&q=80"
            alt="Αδέσποτα ζώα"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              ΜΚΟ · Ζωγράφου, Αθήνα
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Κάθε Ζώο<br />
              <span className="text-green-300">Αξίζει Αγάπη</span><br />
              και Φροντίδα
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
              Η ΜΚΟ Zografou Stray – Vegan Farm περισυλλέγει και φροντίζει αδέσποτα ζώα
              στον Ζωγράφου Αθήνας. Υιοθεσίες, κτηνιατρική φροντίδα, και βιώσιμο αγρόκτημα
              για μια καλύτερη κοινότητα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-full text-lg text-center transition-colors">
                Κάνε Δωρεά
              </Link>
              <Link href="/campaigns" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg text-center transition-colors">
                Δες τις Εκστρατείες
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                  <div className="flex justify-center mb-3">
                    <div className="bg-green-100 rounded-full p-3">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-800">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Η Αποστολή μας</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Αδέσποτα με Αξιοπρέπεια,<br />Κοινότητα με Συνείδηση
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Στον Ζωγράφου, εκατοντάδες αδέσποτα ζώα ζουν στους δρόμους χωρίς φροντίδα.
                Εμείς τα περισυλλέγουμε, τα θεραπεύουμε και βρίσκουμε ζεστά σπίτια για αυτά.
                Παράλληλα, το Vegan Farm μας εκπαιδεύει την κοινότητα στη βιώσιμη αγροτική ζωή
                χωρίς εκμετάλλευση ζώων.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Μάθε Περισσότερα <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-48 relative">
                <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80" alt="Σκύλος αδέσποτος" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative mt-8">
                <Image src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&q=80" alt="Γάτα αδέσποτη" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative">
                <Image src="https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400&q=80" alt="Vegan αγρόκτημα" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative mt-8">
                <Image src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80" alt="Λαχανικά αγρόκτημα" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Ενεργές Εκστρατείες</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Στήριξε τις Δράσεις μας</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Κάθε εκστρατεία έχει συγκεκριμένο στόχο και άμεσο αντίκτυπο στη ζωή αδέσποτων ζώων.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => {
              const pct = Math.round((campaign.raised / campaign.goal) * 100);
              return (
                <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-48 relative">
                    <Image src={campaign.image} alt={campaign.title} fill className="object-cover" />
                    {campaign.urgent && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        ΕΠΕΙΓΟΝ
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full self-start mb-3">
                      {campaign.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{campaign.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{campaign.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-green-700">€{campaign.raised.toLocaleString("el-GR")} συγκεντρώθηκαν</span>
                        <span className="text-gray-400">από €{campaign.goal.toLocaleString("el-GR")}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-1">{pct}% του στόχου</div>
                    </div>
                    <Link href={`/donate?campaign=${campaign.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full text-sm text-center block transition-colors">
                      Στήριξε αυτή την Εκστρατεία
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/campaigns" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Όλες οι Εκστρατείες <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Η Καθημερινότητά μας</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Στιγμές από το Έργο μας</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", alt: "Σκύλος περισυλλογή" },
              { src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&q=80", alt: "Γατάκια φροντίδα" },
              { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", alt: "Αγρόκτημα" },
              { src: "https://images.unsplash.com/photo-1444930694458-01babf71870c?w=400&q=80", alt: "Εθελοντές" },
              { src: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=400&q=80", alt: "Σκύλος υιοθεσία" },
              { src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80", alt: "Γάτα" },
              { src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80", alt: "Λαχανικά" },
              { src: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?w=400&q=80", alt: "Σκύλος παιχνίδι" },
            ].map((img, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Κάνε τη Διαφορά Σήμερα</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            €10 πληρώνει ένα εμβόλιο. €25 καλύπτει στείρωση. €100 χρηματοδοτεί επείγουσα χειρουργική.
            Κάθε ποσό μετράει.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-full text-lg transition-colors">Εφάπαξ Δωρεά</Link>
            <Link href="/donate?type=monthly" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-lg transition-colors">Μηνιαία Στήριξη</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Ιστορίες</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Τι Λένε οι Άνθρωποί μας</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center text-green-700 font-bold">{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Μείνε Ενημερωμένος</h2>
          <p className="text-gray-500 mb-6">
            Λάβε μηνιαίες ενημερώσεις για τα ζώα μας, τις εκστρατείες και τους τρόπους που μπορείς να βοηθήσεις.
          </p>
          <NewsletterForm />
          <p className="text-xs text-gray-400 mt-3">Χωρίς spam. Διαγραφή οποτεδήποτε.</p>
        </div>
      </section>
    </div>
  );
}
