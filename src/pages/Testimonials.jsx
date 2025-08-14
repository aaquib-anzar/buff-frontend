"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

function Testimonials() {
  return (
    <>
            <section
              className="min-h-[40rem] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 
                   bg-white dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden rounded-md"
            >
              <h1
                className="font-bold font-delius mb-6 sm:mb-10 
                     text-3xl sm:text-5xl lg:text-6xl 
                     leading-tight text-gray-900 dark:text-gray-600 text-center"
              >
                WHAT OUR CLIENT SAYS
              </h1>

              <div className="w-full max-w-7xl">
                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                />
              </div>
            </section>
    </>
  );
}
export default Testimonials
const testimonials = [
  {
    quote:
      "My car hasn’t looked this good since the day I bought it! The shine is unreal, and every little detail was handled with care.",
    name: "Rahul Mehta",
    title: "Full Exterior Detailing",
  },
  {
    quote:
      "The interior smells fresh, the leather seats feel soft again, and every speck of dust is gone. Even the cup holders sparkle!",
    name: "Priya Sharma",
    title: "Interior Deep Clean",
  },
  {
    quote:
      "From polished wheels to streak-free windows, every inch of my car looks perfect. Never had detailing this professional before.",
    name: "Amit Khanna",
    title: "Premium Detail Package",
  },
  {
    quote:
      "They removed years of scratches and swirl marks. Now my car’s paint looks flawless — people keep asking if it’s brand new!",
    name: "Sonal Gupta",
    title: "Paint Correction",
  },
  {
    quote:
      "The ceramic coating is worth every penny. Rain just slides off, and cleaning my car is effortless now.",
    name: "Vikram Rao",
    title: "Ceramic Coating Service",
  },
  {
    quote:
      "I didn’t think my old SUV could shine again, but they proved me wrong. It looks better than when I bought it.",
    name: "Arjun Malhotra",
    title: "Full Service Detailing",
  },
  {
    quote:
      "They got rid of stubborn pet hair and food stains from the back seats. Feels like a brand new interior!",
    name: "Neha Kapoor",
    title: "Pet Hair & Stain Removal",
  },
  {
    quote:
      "Water spots and dull paint were making my car look tired. Now it’s glossy and smooth to the touch.",
    name: "Kabir Singh",
    title: "Exterior Restoration",
  },
  {
    quote:
      "I booked the premium detailing package before my wedding. Guests thought I bought a new car just for the event!",
    name: "Meera Joshi",
    title: "Special Event Detailing",
  },
  {
    quote:
      "Quick, professional, and absolutely meticulous. This is the only place I trust with my car now.",
    name: "Rohit Verma",
    title: "Express Detailing",
  },
];
