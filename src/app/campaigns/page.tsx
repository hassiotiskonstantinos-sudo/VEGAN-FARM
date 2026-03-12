import Link from "next/link";
import { ArrowRight, Target, Clock } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Community Seed Library",
    description: "Help us build a free seed library for 10 rural communities, enabling them to grow their own heirloom organic food year-round. Seeds will be stored in climate-controlled facilities and distributed each planting season.",
    goal: 15000,
    raised: 9800,
    image: "🌱",
    category: "Food Security",
    urgent: true,
    daysLeft: 8,
    donors: 143,
  },
  {
    id: 2,
    title: "Vegan Farmer Training Program",
    description: "Fund a 3-month training workshop series for 100 small-scale farmers transitioning to sustainable, plant-based agriculture. Includes hands-on field sessions, business planning, and market access support.",
    goal: 25000,
    raised: 18200,
    image: "🌾",
    category: "Education",
    urgent: false,
    daysLeft: 21,
    donors: 267,
  },
  {
    id: 3,
    title: "Urban Rooftop Garden Initiative",
    description: "Transform 20 urban rooftops into productive vegan gardens that feed local neighborhoods. Each garden will produce over 500kg of vegetables per year and become a community gathering space.",
    goal: 30000,
    raised: 12500,
    image: "🏙️",
    category: "Urban Farming",
    urgent: false,
    daysLeft: 35,
    donors: 189,
  },
  {
    id: 4,
    title: "School Vegan Gardens Program",
    description: "Install raised garden beds and composting systems in 15 schools. Students will learn plant science, nutrition, and environmental responsibility through hands-on growing.",
    goal: 20000,
    raised: 4100,
    image: "🏫",
    category: "Education",
    urgent: false,
    daysLeft: 45,
    donors: 72,
  },
  {
    id: 5,
    title: "Drought-Resistant Crop Research",
    description: "Fund research into drought-resistant vegan crops suitable for arid regions. Our agronomists are testing 30 varieties that could transform food security in water-stressed communities.",
    goal: 40000,
    raised: 22000,
    image: "🔬",
    category: "Research",
    urgent: false,
    daysLeft: 60,
    donors: 318,
  },
  {
    id: 6,
    title: "Emergency Food Relief Fund",
    description: "Provide emergency vegan meal kits to 500 families affected by recent flooding. Each kit contains 2 weeks of nutritious plant-based staples and cooking instructions.",
    goal: 10000,
    raised: 8700,
    image: "🆘",
    category: "Emergency Relief",
    urgent: true,
    daysLeft: 5,
    donors: 421,
  },
];

const categories = ["All", "Food Security", "Education", "Urban Farming", "Research", "Emergency Relief"];

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Active Fundraising
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Campaigns</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Choose a campaign close to your heart and make a direct, measurable impact in farming communities around the world.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
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

      {/* Campaigns Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => {
              const pct = Math.round((campaign.raised / campaign.goal) * 100);
              return (
                <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-44 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center text-7xl relative">
                    {campaign.image}
                    {campaign.urgent && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {campaign.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{campaign.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{campaign.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-green-700">${campaign.raised.toLocaleString()} raised</span>
                        <span className="text-gray-400">of ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full"
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-green-600 font-medium">{pct}% funded</span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Target className="h-3 w-3" />
                          {campaign.donors} donors
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/donate?campaign=${campaign.id}`}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      Donate to This Campaign <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start a Campaign CTA */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have an Idea for a Campaign?</h2>
          <p className="text-gray-500 mb-6">
            We partner with community leaders to launch impactful fundraising campaigns. If you have a project idea that aligns with our mission, we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
