import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";

export default function AboutPage() {
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
          <Link
            href="/services"
            className="hover:text-emerald-500 transition-colors"
          >
            Services
          </Link>
          <Link href="/about" className="text-emerald-500">
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
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            About Me
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              I am a specialized 3D artist with over 8 years of experience in
              creating high-fidelity jewelry models and product visualizations.
              My work combines technical precision with artistic vision to
              create photorealistic 3D assets for the luxury goods industry.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-emerald-500">
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium mb-2">3D Modeling</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Blender</li>
                  <li>ZBrush</li>
                  <li>Maya</li>
                  <li>Rhino 3D</li>
                  <li>Fusion 360</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Rendering & Texturing</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keyshot</li>
                  <li>Substance Painter</li>
                  <li>V-Ray</li>
                  <li>Arnold</li>
                  <li>Marmoset Toolbag</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-emerald-500">
              Work Process
            </h3>

            <p className="mb-4">
              My workflow begins with detailed technical specifications and
              reference materials. I create precise 3D models with attention to
              scale, proportion, and mechanical functionality. For jewelry
              pieces, I focus on gemstone faceting, metal reflectivity, and
              realistic material properties to achieve photorealistic results.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-emerald-500">
              Clients & Collaborations
            </h3>

            <p className="mb-4">
              I've had the privilege of working with leading jewelry brands,
              watchmakers, and luxury goods manufacturers. My 3D models have
              been used for product visualization, marketing materials,
              manufacturing references, and interactive AR/VR experiences.
            </p>

            <div className="mt-8 flex justify-center">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                View My Portfolio
              </Button>
            </div>
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
