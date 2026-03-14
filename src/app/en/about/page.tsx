import Link from "next/link";
import Image from "next/image";
import { Heart, Leaf, Users, Globe, ArrowRight, Award, BookOpen, Sprout } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "We live and act in harmony with nature, protecting ecosystems for future generations." },
  { icon: Heart, title: "Compassion", desc: "Love for animals, people, and the planet guides every decision we make." },
  { icon: Users, title: "Community", desc: "We work together with Zografou residents for the common good." },
  { icon: Globe, title: "Justice", desc: "We fight for equal access to healthy food and respect for all living beings." },
];

const milestones = [
  { year: "2019", event: "We begin as a self-organised volunteer collective in Zografou — feeding strays and first sterilizations." },
  { year: "2020", event: "Daily feeding launched at 15 neighbourhood spots; network grows to 30+ volunteers." },
  { year: "2021", event: "Volunteer vet network established — 100+ sterilizations. First farm animal rescues." },
  { year: "2022", event: "Community vegan farm opens. Rabbits, geese, and pigs rescued and sheltered." },
  { year: "2023", event: "Official NGO registration: Zografou Stray – Vegan Farm. Dog adoption shelter construction begins." },
  { year: "2024", event: "280+ successful adoptions. Animals rescued from wildfires and floods." },
];

export default function AboutEnPage() {
  return (
    <div>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/vegan-farm-collage.jpeg" alt="Vegan Farm — our team and animals" fill className="object-cover" />
          <div className="absolute inset-0 bg-green-950/70" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Since 2019 we have been active in Zografou, Athens as a self-organised collective. In 2023 we gained official legal status as an NGO. We are volunteers, neighbours, and advocates.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To rescue, care for, and find homes for stray animals in Zografou. At the same time, to build a sustainable, vegan community through education, farming, and collective action.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-3xl p-8">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A neighbourhood where no animal goes hungry or suffers, and every resident has access to fresh, organic vegetables. A world free of animal exploitation and respectful of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">What We Believe</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Values</h2>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Milestones</h2>
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
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">Recognition</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Awards & Honours</h2>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-48 shrink-0 rounded-2xl overflow-hidden border border-yellow-200 shadow-sm">
              <Image
                src="/images/award-ministry.jpeg"
                alt="Award from the Greek Ministry of Interior"
                width={200}
                height={280}
                className="object-cover w-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-6 w-6 text-yellow-600 shrink-0" />
                <span className="font-bold text-yellow-800 text-lg">"Heroic Hearts" Award 2025</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our organisation <strong>Vegan Farm Animal Liberation</strong> was honoured by the <strong>Special Secretariat for the Protection of Companion Animals</strong> of the Greek Ministry of Interior at the 1st Official "Heroic Hearts" Ceremony.
              </p>
              <p className="text-gray-600 text-sm">
                The ceremony took place on <strong>5 December 2025</strong> at the National Insurance Conference Centre, 103 Syngrou Avenue, Athens — World Volunteer Day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: "NGO since 2023" },
              { icon: BookOpen, label: "Active since 2019" },
              { icon: Users, label: "50+ Volunteers" },
              { icon: Leaf, label: "100% Vegan Action" },
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
          <h2 className="text-2xl font-bold mb-3">Join Our Mission</h2>
          <p className="text-green-100 mb-6">Whether you donate, volunteer, or simply share our work — every bit of help counts.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/en/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-3 rounded-full transition-colors">
              Donate
            </Link>
            <Link href="/en/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 justify-center">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
