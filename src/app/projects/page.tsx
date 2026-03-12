"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Green Valleys Community Farm",
    location: "Kenya, East Africa",
    status: "Active",
    year: "2022",
    description: "A 50-acre cooperative farm run entirely by community members. We provided training, tools, and market connections. Today it feeds 3,000 people and generates income for 45 families.",
    impact: ["45 farming families supported", "3,000 people fed monthly", "$280,000 in annual revenue", "30 acres of forest restored"],
    image: "🌍",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "City Seeds – Detroit Urban Farms",
    location: "Detroit, Michigan, USA",
    status: "Active",
    year: "2021",
    description: "Transforming vacant urban lots into productive organic gardens. The program trains unemployed youth and provides fresh produce to food deserts across the city.",
    impact: ["22 urban gardens established", "180 youth trained", "15,000 lbs of produce annually", "4 food deserts served"],
    image: "🏙️",
    category: "Urban Farming",
  },
  {
    id: 3,
    title: "Roots & Routes School Program",
    location: "Multiple Countries",
    status: "Active",
    year: "2020",
    description: "Integrating vegan growing into school curricula. Students maintain garden beds, learn composting, and take produce home. Piloted in 3 countries, now operating in 40 schools.",
    impact: ["40 schools participating", "12,000 students engaged", "Launched in 3 countries", "20 teachers trained as facilitators"],
    image: "🏫",
    category: "Education",
  },
  {
    id: 4,
    title: "Arid Lands Vegan Farming Project",
    location: "Rajasthan, India",
    status: "Active",
    year: "2023",
    description: "Testing drought-resistant vegan crops and water-harvesting techniques in one of the world's most challenging agricultural environments.",
    impact: ["12 drought-resistant varieties tested", "Water usage reduced by 60%", "200 farmers adopting new techniques", "3 research papers published"],
    image: "🔬",
    category: "Research",
  },
  {
    id: 5,
    title: "Food Forest Initiative",
    location: "Brazil & Colombia",
    status: "Completed",
    year: "2019",
    description: "Planted over 50 food forests across two countries, combining fruit trees, nitrogen-fixing shrubs, and ground-cover vegetables into permanent, self-sustaining food systems.",
    impact: ["58 food forests planted", "800 hectares reforested", "2,400 families benefiting", "15 indigenous land rights secured"],
    image: "🌳",
    category: "Conservation",
  },
  {
    id: 6,
    title: "Seed Sovereignty Network",
    location: "Global",
    status: "Active",
    year: "2018",
    description: "A global network of seed libraries and vegan farmers sharing heirloom and open-pollinated seeds freely. Protecting biodiversity and farmer independence from corporate seed monopolies.",
    impact: ["3,200 seed varieties catalogued", "85 seed libraries established", "Network in 40 countries", "Free access for small farmers"],
    image: "🌱",
    category: "Food Security",
  },
];

const categories = ["All", "Agriculture", "Urban Farming", "Education", "Research", "Conservation", "Food Security"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            On the Ground
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Real projects, real communities, real impact. Explore what your donations are making possible around the world.
          </p>
        </div>
      </section>

      {/* Filter */}
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

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No projects in this category yet.</p>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-40 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center text-7xl relative">
                  {project.image}
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="h-3 w-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" /> Since {project.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Impact Highlights</p>
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
                    Support This Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Partner With Us</h2>
          <p className="text-gray-500 mb-6">
            Are you an organisation, government, or funder looking to collaborate on sustainable food projects? We welcome partnerships that align with our mission.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
