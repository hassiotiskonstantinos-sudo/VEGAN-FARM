import Link from "next/link";
import { Heart, Leaf, Users, Globe, ArrowRight, Award, BookOpen, Sprout } from "lucide-react";

const team = [
  { name: "Dr. Elena Vasquez", role: "Executive Director", bio: "20+ years in sustainable agriculture and food policy advocacy.", emoji: "👩‍🌾" },
  { name: "Marcus Johnson", role: "Programs Director", bio: "Former UN FAO consultant specializing in food sovereignty.", emoji: "👨‍💼" },
  { name: "Priya Nair", role: "Community Outreach Lead", bio: "Grassroots organizer with experience in 40+ countries.", emoji: "👩‍💻" },
  { name: "Tom Okafor", role: "Head of Farming Operations", bio: "Certified permaculture designer and vegan farmer of 15 years.", emoji: "👨‍🌾" },
];

const values = [
  { icon: Leaf, title: "Sustainability", desc: "We farm in harmony with nature, protecting ecosystems for future generations." },
  { icon: Heart, title: "Compassion", desc: "Kindness to animals, people, and the planet guides everything we do." },
  { icon: Users, title: "Community", desc: "We center local voices and community ownership in all our programs." },
  { icon: Globe, title: "Justice", desc: "We fight for equitable access to healthy food and farming resources." },
];

const milestones = [
  { year: "2009", event: "VeganFarm NGO founded by a group of farmers and activists in California." },
  { year: "2012", event: "First international program launched in East Africa, training 200 farmers." },
  { year: "2015", event: "Reached 1,000 farmers trained milestone. Expanded to South Asia." },
  { year: "2018", event: "Launched Urban Garden Initiative, bringing farming to city rooftops." },
  { year: "2021", event: "Distributed 1 million meals through our food relief programs." },
  { year: "2024", event: "Operating in 85+ communities across 30+ countries worldwide." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About VeganFarm NGO</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Since 2009, we have been at the forefront of the movement to transform agriculture into a force for healing the planet and nourishing communities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-3xl p-8">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower communities worldwide with the knowledge, resources, and support needed to transition to sustainable, plant-based farming systems that restore ecosystems, ensure food sovereignty, and promote compassionate living.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-3xl p-8">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every community has access to nutritious, ethically produced food, where farmers thrive without exploiting animals or the environment, and where the relationship between humans and the natural world is one of stewardship and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">What We Stand For</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Core Values</h2>
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Key Milestones</h2>
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

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">The People</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: "501(c)(3) Certified" },
              { icon: BookOpen, label: "Annual Audit Published" },
              { icon: Users, label: "4-Star Charity Navigator" },
              { icon: Leaf, label: "Carbon Neutral Operations" },
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

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Mission</h2>
          <p className="text-green-100 mb-6">Whether you donate, volunteer, or spread the word, you can make a difference.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-3 rounded-full transition-colors">
              Donate Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 justify-center">
              Get Involved <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
