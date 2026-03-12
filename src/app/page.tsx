import Link from "next/link";
import { Heart, Leaf, Users, Globe, ArrowRight, CheckCircle, TrendingUp, Star } from "lucide-react";

const stats = [
  { label: "Farmers Trained", value: "2,400+", icon: Users },
  { label: "Acres Converted", value: "5,800+", icon: Leaf },
  { label: "Meals Distributed", value: "120,000+", icon: Heart },
  { label: "Communities Reached", value: "85+", icon: Globe },
];

const campaigns = [
  {
    id: 1,
    title: "Community Seed Library",
    description: "Help us build a free seed library for 10 rural communities, enabling them to grow their own organic food.",
    goal: 15000,
    raised: 9800,
    image: "🌱",
    category: "Food Security",
    urgent: true,
  },
  {
    id: 2,
    title: "Vegan Farmer Training Program",
    description: "Fund training workshops for 100 small-scale farmers transitioning to sustainable, plant-based agriculture.",
    goal: 25000,
    raised: 18200,
    image: "🌾",
    category: "Education",
    urgent: false,
  },
  {
    id: 3,
    title: "Urban Rooftop Garden Initiative",
    description: "Transform 20 urban rooftops into productive vegan gardens that feed local neighborhoods.",
    goal: 30000,
    raised: 12500,
    image: "🏙️",
    category: "Urban Farming",
    urgent: false,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Community Farmer",
    quote: "VeganFarm changed my life. Thanks to their training, I now run a profitable vegan farm that feeds my entire village.",
    stars: 5,
  },
  {
    name: "James K.",
    role: "School Principal",
    quote: "Our school garden program, funded by VeganFarm, teaches children where food comes from. It is truly transformative.",
    stars: 5,
  },
  {
    name: "Amina L.",
    role: "Volunteer",
    quote: "Volunteering with VeganFarm has been one of the most rewarding experiences of my life. Real impact, real people.",
    stars: 5,
  },
];

const whyUs = [
  "100% of donated funds go directly to programs",
  "Audited financials published annually",
  "Registered 501(c)(3) non-profit organization",
  "Local community-led initiatives",
  "Transparent project reporting",
  "15+ years of grassroots impact",
];

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-10 left-10 text-9xl">🌿</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌱</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              Non-Profit Organisation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Growing a Kinder,<br />
              <span className="text-green-300">Greener World</span><br />
              Together
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
              VeganFarm NGO empowers communities through sustainable plant-based farming,
              food education, and environmental stewardship. Every donation plants the
              seeds of lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-full text-lg text-center transition-colors">
                Donate Now
              </Link>
              <Link href="/campaigns" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg text-center transition-colors">
                View Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Transforming Agriculture,<br />Nourishing Humanity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that sustainable, plant-based farming is the key to a just and healthy future.
                Our programs train farmers, build community gardens, and advocate for policies that
                protect both people and the planet.
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
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl h-48 flex items-center justify-center text-6xl">🌿</div>
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl h-48 flex items-center justify-center text-6xl mt-8">🥕</div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-48 flex items-center justify-center text-6xl">💧</div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl h-48 flex items-center justify-center text-6xl mt-8">🌻</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Active Fundraising</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Support Our Campaigns</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every campaign is community-driven and makes a direct, measurable impact on the ground.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => {
              const pct = Math.round((campaign.raised / campaign.goal) * 100);
              return (
                <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center text-7xl">{campaign.image}</div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{campaign.category}</span>
                      {campaign.urgent && <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">Urgent</span>}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{campaign.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{campaign.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-green-700">${campaign.raised.toLocaleString()} raised</span>
                        <span className="text-gray-400">of ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-1">{pct}% funded</div>
                    </div>
                    <Link href={`/donate?campaign=${campaign.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full text-sm text-center block transition-colors">
                      Support This Campaign
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/campaigns" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
              View All Campaigns <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            A $25 donation feeds a family for a week. A $100 donation trains a farmer. A $500 donation builds a community garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-full text-lg transition-colors">Donate Once</Link>
            <Link href="/donate?type=monthly" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-lg transition-colors">Give Monthly</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Voices of Impact</h2>
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

      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay in the Loop</h2>
          <p className="text-gray-500 mb-6">Get monthly updates on our campaigns, success stories, and ways to get involved.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm" />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
