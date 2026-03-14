import Link from "next/link";
import Image from "next/image";
import { Heart, PawPrint, Users, Home as HomeIcon, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  { label: "Animals Rescued", value: "1,200+", icon: PawPrint },
  { label: "Successful Adoptions", value: "850+", icon: Heart },
  { label: "Volunteers", value: "300+", icon: Users },
  { label: "Families Helped", value: "120+", icon: HomeIcon },
];

const campaigns = [
  {
    id: 1,
    title: "Veterinary Fund for Strays",
    description: "Sterilizations, vaccinations, and emergency surgeries for stray animals in Zografou.",
    goal: 8000,
    raised: 5200,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    category: "Veterinary",
    urgent: true,
  },
  {
    id: 2,
    title: "Community Vegan Farm",
    description: "Building a sustainable farm to educate children and produce fresh vegetables for the neighbourhood.",
    goal: 15000,
    raised: 9400,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    category: "Farm",
    urgent: false,
  },
  {
    id: 7,
    title: "Dog Shelter Infrastructure — URGENT",
    description: "We need €5,000 more to complete the construction of a dog shelter for animals awaiting adoption. We have already contributed €10,000!",
    goal: 5000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "Infrastructure",
    urgent: true,
  },
];

const whyUs = [
  "100% of donations go directly to animals and programs",
  "Transparent financial management",
  "Registered NGO in Greece",
  "300+ active volunteers in Zografou",
  "Partnership with local veterinarians",
  "Active since 2019, officially registered as NGO in 2023",
];

export default function HomeEn() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4">
          {[
            { src: "/images/pigs-farm.jpeg", alt: "Rescued pigs from illegal farm" },
            { src: "/images/goats-shelter.jpeg", alt: "Rescued goats from wildfire" },
            { src: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80", alt: "Rescued dog in shelter" },
            { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80", alt: "Rescued dogs" },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i < 2} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-green-950/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
            NGO · Zografou, Athens
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Animal{" "}
            <span className="text-green-300">Deserves Love</span>{" "}
            and Care
          </h1>
          <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Zografou Stray – Vegan Farm rescues and cares for stray animals in Zografou, Athens.
            Adoptions, veterinary care, and a sustainable farm for a better community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-full text-lg text-center transition-colors">
              Donate Now
            </Link>
            <Link href="/en/campaigns" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg text-center transition-colors">
              View Campaigns
            </Link>
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
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Strays with Dignity,<br />Community with Conscience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In Zografou, hundreds of stray animals live on the streets without care.
                We rescue them, provide medical treatment, and find them loving homes.
                Our Vegan Farm educates the community in sustainable living without animal exploitation.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/en/about" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-48 relative">
                <Image src="/images/founder-with-lamb.jpeg" alt="Founder with rescued lamb" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative mt-8">
                <Image src="/images/cat-garden.jpeg" alt="Rescued cat" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative">
                <Image src="/images/goat-handfed.jpeg" alt="Rescued goat at the farm" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 relative mt-8">
                <Image src="/images/baby-goat.jpeg" alt="Baby goat rescued" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Active Campaigns</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Support Our Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each campaign has a specific goal and direct impact on the lives of stray animals.
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
                        URGENT
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
                        <span className="text-green-700">€{campaign.raised.toLocaleString("en")} raised</span>
                        <span className="text-gray-400">of €{campaign.goal.toLocaleString("en")}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-1">{pct}% of goal</div>
                    </div>
                    <Link href={`/en/donate?campaign=${campaign.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full text-sm text-center block transition-colors">
                      Support This Campaign
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/en/campaigns" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
              All Campaigns <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Daily Work</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Moments from the Field</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/vegan-farm-collage.jpeg", alt: "Vegan Farm — our team" },
              { src: "/images/founder-with-lamb.jpeg", alt: "Founder with rescued lamb" },
              { src: "/images/sheep-farm.jpeg", alt: "Rescued sheep at the farm" },
              { src: "/images/goats-shelter.jpeg", alt: "Rescued goats in the shelter" },
              { src: "/images/pigs-farm.jpeg", alt: "Rescued pigs at the farm" },
              { src: "/images/cat-garden.jpeg", alt: "Rescued cat" },
              { src: "/images/goat-handfed.jpeg", alt: "Hand-feeding a rescued goat" },
              { src: "/images/baby-goat.jpeg", alt: "Baby goat rescued" },
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            €10 pays for a vaccine. €25 covers a sterilization. €100 funds emergency surgery.
            Every amount matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-full text-lg transition-colors">One-time Donation</Link>
            <Link href="/en/donate?type=monthly" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-lg transition-colors">Monthly Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
