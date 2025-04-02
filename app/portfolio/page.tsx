"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";
import { useState } from "react";

export default function PortfolioPage() {
  // Add state for the active category
  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects
  const portfolioProjects = [
    {
      id: 1,
      title: "Rose Gold Diamond Ring",
      image: "/images/ring-rose-gold.png",
      category: "Jewelry",
      software: "Blender, ZBrush",
      polygons: "24K",
      renderTime: "4.2 hours",
    },
    {
      id: 2,
      title: "Gold Bangles Collection",
      image: "/images/gold-bangles.png",
      category: "Jewelry",
      software: "Maya, Substance Painter",
      polygons: "32K",
      renderTime: "5.8 hours",
    },
    {
      id: 3,
      title: "Gold Diamond Ring",
      image: "/images/ring-gold.png",
      category: "Jewelry",
      software: "Blender, Rhino 3D",
      polygons: "18K",
      renderTime: "3.5 hours",
    },
    {
      id: 4,
      title: "Silver Diamond Ring",
      image: "/images/ring-silver.png",
      category: "Jewelry",
      software: "ZBrush, Keyshot",
      polygons: "22K",
      renderTime: "4.0 hours",
    },
    {
      id: 5,
      title: "Luxury Watch Visualization",
      image: "/images/rolex-two-tone.png",
      category: "Watches",
      software: "Fusion 360, Blender",
      polygons: "86K",
      renderTime: "7.2 hours",
    },
    {
      id: 6,
      title: "Watch Technical Wireframe",
      image: "/images/watch-wireframe.png",
      category: "Technical",
      software: "3ds Max, CAD",
      polygons: "120K",
      renderTime: "N/A",
    },
    {
      id: 7,
      title: "Gold Necklace Set",
      image: "/images/gold-necklace-set.png",
      category: "Jewelry",
      software: "Blender, Substance Painter",
      polygons: "64K",
      renderTime: "8.5 hours",
    },
    {
      id: 8,
      title: "Luxury Watch - Sky-Dweller",
      image: "/images/rolex-sky-dweller.png",
      category: "Watches",
      software: "Fusion 360, V-Ray",
      polygons: "92K",
      renderTime: "9.2 hours",
    },
    {
      id: 9,
      title: "Gold Wavy Bangles",
      image: "/images/gold-wavy-bangles.png",
      category: "Jewelry",
      software: "ZBrush, Keyshot",
      polygons: "28K",
      renderTime: "4.8 hours",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            3D<span className="text-emerald-500">Craft</span>
          </h1>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/portfolio" className="text-emerald-500">
            Portfolio
          </Link>
          <Link
            href="/services"
            className="hover:text-emerald-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-emerald-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="text-emerald-500 border-emerald-500"
        >
          Hire Me
        </Button>
      </header>

      {/* Top AdSense Banner */}
      <div className="w-full my-4">
        {/* <AdSenseContainer position="top" /> */}
      </div>

      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          3D Modeling Portfolio
        </h2>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button
            variant={activeCategory === "All" ? "outline" : "ghost"}
            className={
              activeCategory === "All"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("All")}
          >
            All Projects
          </Button>
          <Button
            variant={activeCategory === "Jewelry" ? "outline" : "ghost"}
            className={
              activeCategory === "Jewelry"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Jewelry")}
          >
            Jewelry
          </Button>
          <Button
            variant={activeCategory === "Watches" ? "outline" : "ghost"}
            className={
              activeCategory === "Watches"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Watches")}
          >
            Watches
          </Button>
          <Button
            variant={activeCategory === "Technical" ? "outline" : "ghost"}
            className={
              activeCategory === "Technical"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Technical")}
          >
            Technical
          </Button>
          <Button
            variant={activeCategory === "Concept Art" ? "outline" : "ghost"}
            className={
              activeCategory === "Concept Art"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Concept Art")}
          >
            Concept Art
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-emerald-500/20 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain bg-black group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div>
                    <span className="text-emerald-500 font-medium">
                      Software:
                    </span>
                    <br />
                    {project.software}
                  </div>
                  <div>
                    <span className="text-emerald-500 font-medium">
                      Polygons:
                    </span>
                    <br />
                    {project.polygons}
                  </div>
                  <div>
                    <span className="text-emerald-500 font-medium">
                      Render Time:
                    </span>
                    <br />
                    {project.renderTime}
                  </div>
                </div>

                <Button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black">
                  View Project Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Side AdSense - Shown between items on mobile, on the side on desktop */}
        <div className="my-8 lg:hidden">
          {/* <AdSenseContainer position="top" /> */}
        </div>
        <div className="hidden lg:block fixed right-4 top-1/4">
          {/* <AdSenseContainer position="side" /> */}
        </div>
      </main>

      {/* Bottom AdSense Banner */}
      <div className="w-full mt-8">
        {/* <AdSenseContainer position="bottom" /> */}
      </div>

      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 3DCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
