"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Clock } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Veterinary Fund for Strays",
    description: "Sterilizations, vaccinations, and emergency surgeries for stray animals in Zografou. Every animal we rescue needs veterinary care before finding a home.",
    goal: 8000,
    raised: 5200,
    image: "/images/lamb-feeding.jpeg",
    category: "Veterinary",
    urgent: true,
    daysLeft: 10,
    donors: 98,
  },
  {
    id: 2,
    title: "Community Vegan Farm",
    description: "Creating a sustainable farm free of animal exploitation. Growing fresh vegetables for the neighbourhood and educating children and adults in vegan farming.",
    goal: 15000,
    raised: 9400,
    image: "/images/goat-handfed.jpeg",
    category: "Farm",
    urgent: false,
    daysLeft: 25,
    donors: 143,
  },
  {
    id: 3,
    title: "Stray Cat Shelter",
    description: "Building a safe shelter for cats living on the streets of Zografou — warm, secure, and temporary until a family is found.",
    goal: 12000,
    raised: 4800,
    image: "/images/cat-garden.jpeg",
    category: "Shelter",
    urgent: false,
    daysLeft: 40,
    donors: 67,
  },
  {
    id: 4,
    title: "Children & Animals Education",
    description: "Educational programme in Zografou schools about animal care, vegan nutrition, and climate change.",
    goal: 5000,
    raised: 1800,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    category: "Education",
    urgent: false,
    daysLeft: 50,
    donors: 34,
  },
  {
    id: 5,
    title: "Winter Food for Strays",
    description: "Providing warm food and water for stray animals living outside during the winter months in Zografou and surrounding areas.",
    goal: 3000,
    raised: 2700,
    image: "/images/sheep-farm.jpeg",
    category: "Food",
    urgent: true,
    daysLeft: 7,
    donors: 201,
  },
  {
    id: 6,
    title: "Wheelchairs for Paralysed Animals",
    description: "Purchasing orthopaedic wheelchairs for dogs with mobility issues that we rescued from accidents.",
    goal: 2500,
    raised: 1100,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
    category: "Equipment",
    urgent: false,
    daysLeft: 30,
    donors: 45,
  },
  {
    id: 7,
    title: "Dog Shelter Infrastructure",
    description: "Building kennels, shelters, and exercise areas for dogs awaiting adoption. We have already raised €10,000 — we need €5,000 more to complete the project!",
    goal: 5000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "Infrastructure",
    urgent: true,
    daysLeft: 60,
    donors: 0,
  },
  {
    id: 8,
    title: "Farm Animal Rescue — Fires & Floods",
    description: "Rescuing and rehabilitating former farm animals (pigs, goats, lambs, poultry) from wildfires, floods, abuse, and illegal farms. We give them a life of dignity.",
    goal: 10000,
    raised: 2400,
    image: "/images/pigs-farm.jpeg",
    category: "Rescue",
    urgent: true,
    daysLeft: 45,
    donors: 38,
  },
  {
    id: 9,
    title: "Space for Rescued Rabbits",
    description: "Improving and expanding the living space for rabbits rescued from abuse and abandonment. We need platforms, hiding spots, and medical equipment.",
    goal: 3500,
    raised: 800,
    image: "/images/lamb-hay.jpeg",
    category: "Infrastructure",
    urgent: false,
    daysLeft: 55,
    donors: 21,
  },
  {
    id: 10,
    title: "Sanctuary for Geese & Pigs from Fires",
    description: "Creating a safe space for geese rescued from wildfires and pigs saved from illegal farms. These animals need space, care, and love.",
    goal: 6000,
    raised: 1200,
    image: "/images/goats-shelter.jpeg",
    category: "Rescue",
    urgent: false,
    daysLeft: 70,
    donors: 17,
  },
];

const categories = ["All", "Veterinary", "Farm", "Shelter", "Education", "Food", "Equipment", "Infrastructure", "Rescue"];

export default function CampaignsEnPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? campaigns
    : campaigns.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Active Campaigns
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support Our Work</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Each campaign has a specific goal and direct impact on animals and our community.
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
            <p className="text-center text-gray-400 py-20">No campaigns in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((campaign) => {
                const pct = Math.round((campaign.raised / campaign.goal) * 100);
                return (
                  <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                    <div className="h-48 relative">
                      <Image src={campaign.image} alt={campaign.title} fill className="object-cover" />
                      {campaign.urgent && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">URGENT</span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{campaign.category}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />{campaign.daysLeft} days left
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{campaign.title}</h3>
                      <p className="text-gray-500 text-sm mb-4 flex-1">{campaign.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm font-medium mb-1">
                          <span className="text-green-700">€{campaign.raised.toLocaleString("en")} raised</span>
                          <span className="text-gray-400">of €{campaign.goal.toLocaleString("en")}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-green-600 font-medium">{pct}% of goal</span>
                          <span className="flex items-center gap-1 text-xs text-gray-400"><Target className="h-3 w-3" />{campaign.donors} donors</span>
                        </div>
                      </div>
                      <Link href={`/en/donate?campaign=${campaign.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm text-center flex items-center justify-center gap-2 transition-colors">
                        Donate <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have an idea for a campaign?</h2>
          <p className="text-gray-500 mb-6">We collaborate with community members on new initiatives. Get in touch!</p>
          <Link href="/en/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
