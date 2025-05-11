"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";
import { useState } from "react";
import ProjectDetailsModal from "@/components/project-details-modal";

export default function PortfolioPage() {
  // Add state for the active category
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

  // Portfolio projects
  const portfolioProjects = [
    // Car Projects (11 items)
    {
      id: 1,
      title: "Yellow Dynamic Car",
      image: "/car/yellow dinamic car.jpeg",
      category: "Car",
      software: "Blender, Substance Painter",
      polygons: "45K",
      renderTime: "3.2 hours",
    },
    {
      id: 2,
      title: "Yellow Dynamic Car 2",
      image: "/car/yellow dinamic car 2.jpeg",
      category: "Car",
      software: "Blender, V-Ray",
      polygons: "48K",
      renderTime: "3.5 hours",
    },
    {
      id: 3,
      title: "Toon Toy Car with Phone",
      image: "/car/Toon toy car and phone.jpg",
      category: "Car",
      software: "Blender, ZBrush",
      polygons: "52K",
      renderTime: "4.2 hours",
    },
    {
      id: 4,
      title: "Red Sport Car",
      image: "/car/red sport car.jpeg",
      category: "Car",
      software: "Blender, V-Ray",
      polygons: "52K",
      renderTime: "4.5 hours",
    },
    {
      id: 5,
      title: "Red Sport Car 2",
      image: "/car/red sport car 2.jpeg",
      category: "Car",
      software: "Blender, Substance Painter",
      polygons: "55K",
      renderTime: "4.8 hours",
    },
    {
      id: 6,
      title: "Monster Car",
      image: "/car/monster car.jpg",
      category: "Car",
      software: "Blender, ZBrush",
      polygons: "68K",
      renderTime: "5.8 hours",
    },
    {
      id: 7,
      title: "Muddy Pixar Car",
      image:
        "/car/freepik__a-pixarstyle-car-character-covered-in-mud-stuck-in__81506.jpeg",
      category: "Car",
      software: "Blender, Substance Painter",
      polygons: "42K",
      renderTime: "3.8 hours",
    },
    {
      id: 8,
      title: "Anthropomorphic Car",
      image:
        "/car/freepik__a-pixarstyle-anthropomorphic-car-character-with-bi__81505.jpeg",
      category: "Car",
      software: "Blender, ZBrush",
      polygons: "45K",
      renderTime: "4.0 hours",
    },
    {
      id: 9,
      title: "Car with Phone",
      image: "/car/Car with phone Mobile.jpg",
      category: "Car",
      software: "Blender, V-Ray",
      polygons: "58K",
      renderTime: "5.2 hours",
    },
    {
      id: 10,
      title: "3D Shoes with Phone",
      image: "/car/3D Shoes with phone cover.jpg",
      category: "Car",
      software: "Blender, Substance Painter",
      polygons: "62K",
      renderTime: "5.5 hours",
    },
    {
      id: 11,
      title: "Pixar Style Cars",
      image:
        "/car/3D cars images with pixar style redner need consistency.jpeg",
      category: "Car",
      software: "Blender, ZBrush",
      polygons: "48K",
      renderTime: "4.2 hours",
    },
    // Character Projects (15 items)
    {
      id: 12,
      title: "Character Design 1",
      image: "/characters/Character 1/Front_View.jpg",
      category: "Characters",
      software: "ZBrush, Maya",
      polygons: "85K",
      renderTime: "6.2 hours",
    },
    {
      id: 13,
      title: "Character Design 2",
      image: "/characters/Character 2/Front_View.jpg",
      category: "Characters",
      software: "Blender, Substance Painter",
      polygons: "92K",
      renderTime: "7.5 hours",
    },
    {
      id: 14,
      title: "Character Design 3",
      image: "/characters/Character 3/BB-01.jpg",
      category: "Characters",
      software: "Maya, Arnold",
      polygons: "78K",
      renderTime: "5.9 hours",
    },
    {
      id: 15,
      title: "Character Design 4",
      image: "/characters/Character 4/Cop-022.jpg",
      category: "Characters",
      software: "ZBrush, V-Ray",
      polygons: "88K",
      renderTime: "6.8 hours",
    },
    {
      id: 16,
      title: "Character Design 5",
      image: "/characters/Character 5/VV-01.jpg",
      category: "Characters",
      software: "Blender, Substance Painter",
      polygons: "95K",
      renderTime: "7.2 hours",
    },
    {
      id: 17,
      title: "Character Design 6",
      image: "/characters/Character 6/DD-01.jpg",
      category: "Characters",
      software: "Maya, Arnold",
      polygons: "82K",
      renderTime: "6.5 hours",
    },
    {
      id: 18,
      title: "Character Design 7",
      image: "/characters/Character 7/M-01.jpg",
      category: "Characters",
      software: "ZBrush, Keyshot",
      polygons: "90K",
      renderTime: "7.0 hours",
    },
    {
      id: 19,
      title: "Character Design 8",
      image: "/characters/Character 8/CC-01.jpg",
      category: "Characters",
      software: "Blender, V-Ray",
      polygons: "87K",
      renderTime: "6.7 hours",
    },
    {
      id: 20,
      title: "Character Design 9",
      image: "/characters/character 9/FF-01.jpg",
      category: "Characters",
      software: "Maya, Substance Painter",
      polygons: "93K",
      renderTime: "7.3 hours",
    },
    {
      id: 21,
      title: "Character Design 10",
      image: "/characters/Character 10/011.jpg",
      category: "Characters",
      software: "ZBrush, Arnold",
      polygons: "89K",
      renderTime: "6.9 hours",
    },
    {
      id: 22,
      title: "Character Design 11",
      image: "/characters/Character 11/01.jpg",
      category: "Characters",
      software: "Blender, Keyshot",
      polygons: "91K",
      renderTime: "7.1 hours",
    },
    {
      id: 23,
      title: "Character Design 12",
      image: "/characters/Character 12/01.jpg",
      category: "Characters",
      software: "Maya, V-Ray",
      polygons: "86K",
      renderTime: "6.6 hours",
    },
    {
      id: 24,
      title: "Character Design 13",
      image: "/characters/Character 13/01.jpg",
      category: "Characters",
      software: "ZBrush, Substance Painter",
      polygons: "94K",
      renderTime: "7.4 hours",
    },
    {
      id: 25,
      title: "Character Design 14",
      image: "/characters/Character 14/01.jpg",
      category: "Characters",
      software: "Blender, Arnold",
      polygons: "88K",
      renderTime: "6.8 hours",
    },
    {
      id: 26,
      title: "Character Design 15",
      image:
        "/characters/Character 15/Leonardo_Phoenix_10_Render_a_7yearold_version_of_Pikachu_in_ul_1.jpg",
      category: "Characters",
      software: "Maya, Keyshot",
      polygons: "92K",
      renderTime: "7.2 hours",
    },
    // Jewellery Projects (30 items)
    {
      id: 27,
      title: "Thick Golden Ring",
      image: "/jewellery/thik golden ring.jpg",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "32K",
      renderTime: "4.2 hours",
    },
    {
      id: 28,
      title: "Stone Pendant",
      image: "/jewellery/stone Pendel.png",
      category: "Jewellery",
      software: "ZBrush, V-Ray",
      polygons: "38K",
      renderTime: "4.8 hours",
    },
    {
      id: 29,
      title: "Stone Earrings",
      image: "/jewellery/Stone  earings.png",
      category: "Jewellery",
      software: "Blender, Substance Painter",
      polygons: "35K",
      renderTime: "4.5 hours",
    },
    {
      id: 30,
      title: "Royal Rings Collection",
      image: "/jewellery/Royal rings.jpg",
      category: "Jewellery",
      software: "ZBrush, V-Ray",
      polygons: "45K",
      renderTime: "5.8 hours",
    },
    {
      id: 31,
      title: "Elegant Ring",
      image: "/jewellery/Ring.png",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "30K",
      renderTime: "4.0 hours",
    },
    {
      id: 32,
      title: "Rajavadi Earrings",
      image: "/jewellery/Rajavadi earings.jpg",
      category: "Jewellery",
      software: "Maya, Arnold",
      polygons: "42K",
      renderTime: "5.2 hours",
    },
    {
      id: 33,
      title: "Rajavadi Earring Pair",
      image: "/jewellery/Rajavadi earing pair.png",
      category: "Jewellery",
      software: "Blender, Substance Painter",
      polygons: "38K",
      renderTime: "4.8 hours",
    },
    {
      id: 34,
      title: "Blue Diamond Ring",
      image: "/jewellery/Rajavadi Blue dimond ring.png",
      category: "Jewellery",
      software: "ZBrush, V-Ray",
      polygons: "45K",
      renderTime: "5.5 hours",
    },
    {
      id: 35,
      title: "Luxury Jewelry Set",
      image: "/jewellery/photorealistic_3D_rendering_of_a_lu_2.jpg",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "48K",
      renderTime: "5.8 hours",
    },
    {
      id: 36,
      title: "Marriage Bangles",
      image: "/jewellery/marriage Bangles.jpg",
      category: "Jewellery",
      software: "Blender, Substance Painter",
      polygons: "38K",
      renderTime: "4.5 hours",
    },
    {
      id: 37,
      title: "Marriage Ring",
      image: "/jewellery/marage ring.jpg",
      category: "Jewellery",
      software: "ZBrush, V-Ray",
      polygons: "35K",
      renderTime: "4.3 hours",
    },
    {
      id: 38,
      title: "Marriage Bangles Set",
      image: "/jewellery/marage bangles.jpg",
      category: "Jewellery",
      software: "Maya, Arnold",
      polygons: "42K",
      renderTime: "5.0 hours",
    },
    {
      id: 39,
      title: "Jewelry Collection",
      image: "/jewellery/jewellery.png",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "52K",
      renderTime: "6.2 hours",
    },
    {
      id: 40,
      title: "Luxury Jewelry Piece",
      image: "/jewellery/hotorealistic_3D_rendering__3.jpg",
      category: "Jewellery",
      software: "ZBrush, Substance Painter",
      polygons: "45K",
      renderTime: "5.5 hours",
    },
    {
      id: 41,
      title: "Detailed Jewelry Set 1",
      image:
        "/jewellery/highly_detailed_realistic_and_intricately_de_1 (1).jpg",
      category: "Jewellery",
      software: "Blender, V-Ray",
      polygons: "48K",
      renderTime: "5.8 hours",
    },
    {
      id: 42,
      title: "Detailed Jewelry Set 2",
      image: "/jewellery/highly_detailed_photorealistic_3D_rendering__2.jpg",
      category: "Jewellery",
      software: "Maya, Arnold",
      polygons: "46K",
      renderTime: "5.6 hours",
    },
    {
      id: 43,
      title: "Detailed Jewelry Set 3",
      image: "/jewellery/highly_detailed_photorealistic_3D_rendering__1.jpg",
      category: "Jewellery",
      software: "ZBrush, Keyshot",
      polygons: "44K",
      renderTime: "5.4 hours",
    },
    {
      id: 44,
      title: "Detailed Jewelry Set 4",
      image: "/jewellery/highly_detailed_photorealistic_3D_rendering__0.jpg",
      category: "Jewellery",
      software: "Blender, Substance Painter",
      polygons: "42K",
      renderTime: "5.2 hours",
    },
    {
      id: 45,
      title: "Luxury Jewelry Piece 1",
      image:
        "/jewellery/highly_detailed_photorealistic_3D_rendering_of_a_lu_1.jpg",
      category: "Jewellery",
      software: "Maya, V-Ray",
      polygons: "46K",
      renderTime: "5.6 hours",
    },
    {
      id: 46,
      title: "Luxury Jewelry Piece 2",
      image:
        "/jewellery/highly_detailed_photorealistic_3D_rendering_of_a_lu_0.jpg",
      category: "Jewellery",
      software: "ZBrush, Arnold",
      polygons: "44K",
      renderTime: "5.4 hours",
    },
    {
      id: 47,
      title: "High Poly Golden Earring",
      image: "/jewellery/high polly golden earing.jpg",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "52K",
      renderTime: "6.2 hours",
    },
    {
      id: 48,
      title: "Golden Star Ring",
      image: "/jewellery/golden Star ring.jpg",
      category: "Jewellery",
      software: "Maya, Substance Painter",
      polygons: "38K",
      renderTime: "4.8 hours",
    },
    {
      id: 49,
      title: "Golden Royal Earrings",
      image: "/jewellery/golden royal earings.jpg",
      category: "Jewellery",
      software: "ZBrush, V-Ray",
      polygons: "42K",
      renderTime: "5.2 hours",
    },
    {
      id: 50,
      title: "Golden Bracelet",
      image: "/jewellery/golden bracelet.jpg",
      category: "Jewellery",
      software: "Blender, Arnold",
      polygons: "45K",
      renderTime: "5.5 hours",
    },
    {
      id: 51,
      title: "Engagement Ring",
      image: "/jewellery/engagement ring.jpg",
      category: "Jewellery",
      software: "Maya, Keyshot",
      polygons: "40K",
      renderTime: "5.0 hours",
    },
    {
      id: 52,
      title: "Detailed Jewelry Set 5",
      image: "/jewellery/detailed_realistic_and_intricately_de_3.jpg",
      category: "Jewellery",
      software: "ZBrush, Substance Painter",
      polygons: "48K",
      renderTime: "5.8 hours",
    },
    {
      id: 53,
      title: "Detailed Jewelry Set 6",
      image: "/jewellery/detailed_realistic_and_intricately_de_1.jpg",
      category: "Jewellery",
      software: "Blender, V-Ray",
      polygons: "46K",
      renderTime: "5.6 hours",
    },
    {
      id: 54,
      title: "Detailed Jewelry Set 7",
      image: "/jewellery/detailed_realistic_and_intricately_de_0.jpg",
      category: "Jewellery",
      software: "Maya, Arnold",
      polygons: "44K",
      renderTime: "5.4 hours",
    },
    {
      id: 55,
      title: "Luxury Jewelry Piece 3",
      image: "/jewellery/detailed_photorealistic_3D_rendering_of_a_lu_3.jpg",
      category: "Jewellery",
      software: "ZBrush, Keyshot",
      polygons: "42K",
      renderTime: "5.2 hours",
    },
    {
      id: 56,
      title: "Classic Jewelry Collection",
      image: "/jewellery/classic jwellery.png",
      category: "Jewellery",
      software: "Blender, Substance Painter",
      polygons: "50K",
      renderTime: "6.0 hours",
    },
    {
      id: 57,
      title: "Birthstone Rings",
      image: "/jewellery/birthstone rings.png",
      category: "Jewellery",
      software: "Maya, V-Ray",
      polygons: "46K",
      renderTime: "5.6 hours",
    },
    {
      id: 58,
      title: "Detailed Jewelry Set 8",
      image: "/jewellery/a_highly_detailed_realistic_and_intricately_de_2.jpg",
      category: "Jewellery",
      software: "ZBrush, Arnold",
      polygons: "48K",
      renderTime: "5.8 hours",
    },
    {
      id: 59,
      title: "Complete Jewelry Collection",
      image: "/jewellery/all 3D jewelllery.png",
      category: "Jewellery",
      software: "Blender, Keyshot",
      polygons: "55K",
      renderTime: "6.5 hours",
    },
    // Environment Projects (3 items, only first from each subfolder)
    {
      id: 60,
      title: "Village Natural Environment",
      image:
        "/Environment/1st/Flux_Dev_1_Prompt_Village_Natural_Environment_Full_Description_0 (1).jpg",
      category: "Environment",
      software: "Blender, V-Ray",
      polygons: "120K",
      renderTime: "8.2 hours",
    },
    {
      id: 61,
      title: "Bustling Environment",
      image:
        "/Environment/Second/Flux_Dev_a_highly_detailed_and_vibrant_3D_render_of_a_bustling_0.jpg",
      category: "Environment",
      software: "Unreal Engine, Substance",
      polygons: "150K",
      renderTime: "9.5 hours",
    },
    {
      id: 62,
      title: "Candid Nature Environment",
      image:
        "/Environment/third/freepik__the-style-is-candid-image-photography-with-natural__81501.jpeg",
      category: "Environment",
      software: "Blender, V-Ray",
      polygons: "100K",
      renderTime: "7.5 hours",
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
          <Link href="/" className="text-emerald-500">
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
          <Link
            href="/privacy"
            className="hover:text-emerald-500 transition-colors"
          >
            Privacy
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

      <main className="container mx-auto px-4 py-8">
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
            variant={activeCategory === "Car" ? "outline" : "ghost"}
            className={
              activeCategory === "Car"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Car")}
          >
            Car
          </Button>
          <Button
            variant={activeCategory === "Characters" ? "outline" : "ghost"}
            className={
              activeCategory === "Characters"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Characters")}
          >
            Characters
          </Button>
          <Button
            variant={activeCategory === "Environment" ? "outline" : "ghost"}
            className={
              activeCategory === "Environment"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Environment")}
          >
            Environment
          </Button>
          <Button
            variant={activeCategory === "Jewellery" ? "outline" : "ghost"}
            className={
              activeCategory === "Jewellery"
                ? "text-emerald-500 border-emerald-500"
                : ""
            }
            onClick={() => setActiveCategory("Jewellery")}
          >
            Jewellery
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

                <Button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black"
                >
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

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}

      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 3DCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
