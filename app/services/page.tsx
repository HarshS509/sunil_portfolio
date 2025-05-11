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
      title: "Car 3D Modeling & Visualization",
      description:
        "Realistic and stylized 3D models of cars for animation, games, and product visualization. Includes dynamic lighting, texturing, and rendering.",
      icon: <Cube className="w-10 h-10 text-emerald-500" />,
      deliverables: ["3D Car Models", "Renders", "Animation Sequences"],
    },
    {
      id: 2,
      title: "Character Design & Modeling",
      description:
        "Custom 3D character creation for games, animation, and concept art. Includes stylized and realistic characters, rigging, and texturing.",
      icon: <Palette className="w-10 h-10 text-emerald-500" />,
      deliverables: ["3D Character Models", "Turntables", "Rigged Assets"],
    },
    {
      id: 3,
      title: "Environment Modeling",
      description:
        "Detailed 3D environments for games, films, and visualization. Includes natural landscapes, urban scenes, and custom settings.",
      icon: <Lightbulb className="w-10 h-10 text-emerald-500" />,
      deliverables: ["3D Environment Models", "Scene Renders", "Custom Assets"],
    },
    {
      id: 4,
      title: "Jewellery Visualization",
      description:
        "High-fidelity 3D models and renders of rings, pendants, earrings, and more. Perfect for catalogs, marketing, and virtual try-on.",
      icon: <Gem className="w-10 h-10 text-emerald-500" />,
      deliverables: [
        "3D Jewellery Models",
        "Photorealistic Renders",
        "Animation",
      ],
    },
    {
      id: 5,
      title: "Custom 3D Solutions",
      description:
        "Tailored 3D modeling and visualization for your unique project needs, including AR/VR, product design, and more.",
      icon: <Cog className="w-10 h-10 text-emerald-500" />,
      deliverables: ["Consultation", "Custom Models", "Technical Support"],
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
          <Link href="/" className="hover:text-emerald-500 transition-colors">
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

      <main className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-500">
            Professional 3D Services
          </h2>
          <p className="text-gray-300">
            Specialized 3D modeling and visualization services for cars,
            characters, environments, and jewellery. From concept to final
            render, I deliver high-quality 3D assets for your creative and
            business needs.
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
