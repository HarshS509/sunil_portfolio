import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";
import {
  CuboidIcon as Cube,
  Gem,
  Watch,
  Lightbulb,
  Cog,
  Layers,
  Palette,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  // Services offered
  const services = [
    {
      id: 1,
      title: "Jewelry 3D Modeling",
      description:
        "High-fidelity 3D models of rings, necklaces, earrings, and other jewelry pieces with precise gemstone faceting and metal detailing.",
      icon: <Gem className="w-10 h-10 text-emerald-500" />,
      deliverables: ["3D Model Files", "Renders", "Technical Specifications"],
    },
    {
      id: 2,
      title: "Watch Visualization",
      description:
        "Detailed 3D models of watches with accurate mechanical components, materials, and textures for photorealistic visualization.",
      icon: <Watch className="w-10 h-10 text-emerald-500" />,
      deliverables: ["3D Model Files", "Renders", "Animation"],
    },
    {
      id: 3,
      title: "Product Rendering",
      description:
        "Studio-quality renders of your 3D models with professional lighting, materials, and composition for marketing and presentations.",
      icon: <Lightbulb className="w-10 h-10 text-emerald-500" />,
      deliverables: [
        "High-Resolution Images",
        "Different Angles",
        "Custom Environments",
      ],
    },
    {
      id: 4,
      title: "Technical Modeling",
      description:
        "Precise technical 3D models with accurate dimensions and mechanical functionality for manufacturing and engineering purposes.",
      icon: <Cog className="w-10 h-10 text-emerald-500" />,
      deliverables: ["CAD Files", "Technical Drawings", "Specifications"],
    },
    {
      id: 5,
      title: "3D Animation",
      description:
        "Dynamic animations of your 3D models to showcase functionality, design features, and aesthetic details in motion.",
      icon: <Layers className="w-10 h-10 text-emerald-500" />,
      deliverables: ["Animation Files", "Video Renders", "Storyboards"],
    },
    {
      id: 6,
      title: "Concept Visualization",
      description:
        "Transform your sketches and ideas into detailed 3D visualizations to evaluate design concepts before production.",
      icon: <Palette className="w-10 h-10 text-emerald-500" />,
      deliverables: ["Concept Models", "Renders", "Design Iterations"],
    },
    {
      id: 7,
      title: "AR/VR Development",
      description:
        "Integration of 3D models into augmented and virtual reality experiences for interactive product visualization.",
      icon: <Smartphone className="w-10 h-10 text-emerald-500" />,
      deliverables: [
        "AR/VR Ready Models",
        "Interactive Prototypes",
        "Technical Support",
      ],
    },
    {
      id: 8,
      title: "Custom 3D Solutions",
      description:
        "Tailored 3D modeling and visualization solutions for your specific project requirements and industry needs.",
      icon: <Cube className="w-10 h-10 text-emerald-500" />,
      deliverables: [
        "Custom Solutions",
        "Consultation",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            3D<span className="text-emerald-500">Craft</span>
          </h1>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/portfolio"
            className="hover:text-emerald-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/services" className="text-emerald-500">
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
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-500">
            Professional 3D Services
          </h2>
          <p className="text-gray-300">
            Specialized 3D modeling and visualization services for jewelry,
            watches, and luxury products. From concept to final render, I
            deliver high-quality 3D assets for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/50 rounded-lg p-6 hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-emerald-500 mb-2">
                  Deliverables:
                </h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-black">
                Request Service
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 p-8 bg-gray-800/30 rounded-lg border border-emerald-500/20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Need a Custom Service?
          </h3>
          <p className="text-center mb-6">
            If you don't see exactly what you're looking for, I offer custom 3D
            solutions tailored to your specific project requirements.
          </p>
          <div className="flex justify-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Side AdSense */}
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
