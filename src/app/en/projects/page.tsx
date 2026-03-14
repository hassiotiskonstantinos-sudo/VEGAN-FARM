"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Stray Rescue & Adoption — Zografou",
    location: "Zografou, Athens",
    status: "Active",
    year: "2020",
    description: "Systematic rescue of stray dogs and cats from the streets of Zografou, veterinary care, and finding responsible families.",
    impact: ["320+ animals rescued", "280+ successful adoptions", "100% sterilised before adoption", "Network of 50+ foster carers"],
    image: "/images/sheep-farm.jpeg",
    category: "Rescue",
  },
  {
    id: 2,
    title: "Stray Animal Veterinary Centre",
    location: "Zografou, Athens",
    status: "Active",
    year: "2021",
    description: "Free veterinary services for stray animals: vaccinations, sterilizations, emergency surgeries. Collaboration with volunteer vets.",
    impact: ["500+ sterilizations", "1,200+ vaccinations", "80+ surgical procedures", "12 volunteer vets"],
    image: "/images/lamb-feeding.jpeg",
    category: "Veterinary",
  },
  {
    id: 3,
    title: "Community Vegan Farm",
    location: "Outskirts of Zografou",
    status: "Active",
    year: "2022",
    description: "A sustainable farm without animal exploitation. Producing fresh vegetables for the neighbourhood and educating children and adults in vegan farming.",
    impact: ["2 acres under cultivation", "300 kg of vegetables/month", "120 children educated", "40 families benefitting"],
    image: "/images/goat-handfed.jpeg",
    category: "Farm",
  },
  {
    id: 4,
    title: "School Education Programme",
    location: "Zografou Schools",
    status: "Active",
    year: "2023",
    description: "Educational visits to schools on animal care, vegan nutrition, and the climate crisis. Workshops with live examples.",
    impact: ["8 schools participating", "2,000+ students", "15 educational workshops", "4 teachers trained"],
    image: "/images/baby-goat.jpeg",
    category: "Education",
  },
  {
    id: 5,
    title: "Year-Round Feeding of Strays",
    location: "Zografou & Surrounding Areas",
    status: "Active",
    year: "2020",
    description: "Organised feeding of stray animals throughout the year, with emphasis on winter months. Water and food stations at 30+ points.",
    impact: ["200+ animals fed daily", "30 feeding stations", "365 days a year", "50+ volunteer feeders"],
    image: "/images/cat-garden.jpeg",
    category: "Feeding",
  },
  {
    id: 6,
    title: "Shelter & Recovery for Injured Animals",
    location: "Zografou, Athens",
    status: "Active",
    year: "2021",
    description: "A facility for injured or sick strays that need recovery time. Equipped with cages, heating devices, and medical equipment.",
    impact: ["150+ animals housed", "95% survival rate", "24/7 volunteer care", "Full medical equipment"],
    image: "/images/founder-with-lamb.jpeg",
    category: "Shelter",
  },
  {
    id: 7,
    title: "Dog Adoption Shelter Infrastructure",
    location: "Zografou, Athens",
    status: "In Progress",
    year: "2024",
    description: "Building kennels, shelters, and exercise areas so that dogs awaiting adoption can be housed with dignity. We have raised €10,000 — we still need €5,000 to complete it.",
    impact: ["Capacity for 30+ dogs", "Safe individual spaces", "Socialisation area", "Target: completion 2025"],
    image: "/images/vegan-farm-collage.jpeg",
    category: "Infrastructure",
  },
  {
    id: 8,
    title: "Farm Animal Rescue",
    location: "Attica & Surrounding Areas",
    status: "Active",
    year: "2022",
    description: "Rescuing and rehabilitating former farm animals — pigs, goats, poultry — from wildfires, floods, abuse, and illegal farms. We give them a life of dignity.",
    impact: ["40+ farm animals rescued", "Collaboration with fire services", "Veterinary rehabilitation", "Permanent sanctuary for unadoptable animals"],
    image: "/images/pigs-farm.jpeg",
    category: "Rescue",
  },
  {
    id: 9,
    title: "Rabbit, Goose & Pig Sanctuary",
    location: "Zografou Farm",
    status: "Active",
    year: "2023",
    description: "Specially designed spaces for rabbits rescued from abuse, geese from wildfires, and pigs from illegal farms. We continually improve our facilities.",
    impact: ["25+ rabbits sheltered", "8 geese from wildfires", "4 pigs in permanent sanctuary", "Facility improvements ongoing"],
    image: "/images/goats-shelter.jpeg",
    category: "Rescue",
  },
];

const categories = ["All", "Rescue", "Veterinary", "Farm", "Education", "Feeding", "Shelter", "Infrastructure"];

export default function ProjectsEnPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
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
            On the Ground
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Real programs, real results. See what we do every day for animals and the Zografou community.
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
            <p className="text-center text-gray-400 py-20">No programs in this category.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filtered.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-48 relative">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${
                      project.status === "Active"
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
                        <Calendar className="h-3 w-3" /> Since {project.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="bg-green-50 rounded-xl p-4 mb-4">
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Impact</p>
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
                      href={`/en/donate?project=${project.id}`}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full text-sm text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      Support This Program <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to collaborate?</h2>
          <p className="text-gray-500 mb-6">
            Are you an organisation, school, or business that wants to support our work? Get in touch!
          </p>
          <Link href="/en/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
