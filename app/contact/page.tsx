import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AdSenseContainer from "@/components/adsense-container";

export default function ContactPage() {
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
          <Link href="/contact" className="text-emerald-500">
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
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-6 text-gray-300">
                I'm available for freelance work, collaborations, and
                consulting. Let's discuss your project requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">+91 8347039239</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">kubavatsunil2703@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Surat, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-700 border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium mb-1"
                >
                  Project Type
                </label>
                <Input
                  id="project"
                  placeholder="e.g., Jewelry Modeling, Watch Visualization"
                  className="bg-gray-700 border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your project requirements"
                  className="bg-gray-700 border-gray-600"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black">
                Send Message
              </Button>
            </form>
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
