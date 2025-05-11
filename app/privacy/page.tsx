import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";

export const metadata: Metadata = {
  title: "Privacy Policy | Sunil Kubavat",
  description:
    "Privacy Policy for sunilkubavat.in - Learn about how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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
          <Link
            href="/contact"
            className="hover:text-emerald-500 transition-colors"
          >
            Contact
          </Link>
          <Link href="/privacy" className="text-emerald-500">
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

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 text-center">
            Effective Date: March 19, 2024
          </p>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6">
              Welcome to sunilkubavat.in, a 3D portfolio website created and
              maintained by Sunil Kubavat. Your privacy is important to us. This
              Privacy Policy outlines what information we collect, how we use
              it, and the choices you have regarding your data.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information when you visit
                our site:
              </p>

              <h3 className="text-xl font-medium mb-2 text-emerald-500">
                a. Non-Personal Information
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages you visit and time spent on the site</li>
                <li>Referral sources (e.g., Google Search)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 text-emerald-500">
                b. Cookies and Tracking Technologies
              </h3>
              <p className="mb-2 text-gray-300">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Improve user experience</li>
                <li>Monitor website performance</li>
                <li>
                  Deliver personalized ads via Google AdSense (if enabled)
                </li>
              </ul>
              <p className="text-gray-300">
                You can disable cookies in your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                2. Use of Information
              </h2>
              <p className="mb-2 text-gray-300">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Ensure the website functions properly</li>
                <li>Analyze user behavior to improve the design and content</li>
                <li>Show relevant ads if Google AdSense is activated</li>
                <li>Prevent abuse and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                3. Third-Party Services
              </h2>
              <p className="mb-4 text-gray-300">
                We may use the following services that may collect user data:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>
                  Google Analytics – to understand how users interact with our
                  website
                </li>
                <li>Google AdSense – to display advertisements (if enabled)</li>
              </ul>
              <p className="text-gray-300">
                These services may collect data such as IP address, browser
                info, and user activity. Their data collection is governed by
                their own privacy policies. For more info, please visit{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-emerald-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                4. Data Security
              </h2>
              <p className="text-gray-300">
                We take reasonable steps to protect your data. However, no
                method of transmission over the Internet is 100% secure. We
                encourage you to be cautious when sharing any personal
                information online.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                5. Children's Privacy
              </h2>
              <p className="text-gray-300">
                This website is not directed at children under the age of 13. We
                do not knowingly collect any data from minors. If you believe a
                child has provided personal information, please contact us, and
                we will take steps to delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                6. Your Rights
              </h2>
              <p className="mb-2 text-gray-300">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Request access to the data we collect about you</li>
                <li>Ask for correction or deletion of your data</li>
                <li>Opt out of cookie tracking through your browser</li>
              </ul>
              <p className="text-gray-300">
                For any requests, email us at{" "}
                <a
                  href="mailto:sunilkubavatweb@gmail.com"
                  className="text-emerald-500 hover:underline"
                >
                  sunilkubavatweb@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy occasionally. Changes will be
                posted on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-500">
                8. Contact
              </h2>
              <p className="mb-2 text-gray-300">
                If you have any questions or concerns regarding this Privacy
                Policy, please contact:
              </p>
              <ul className="list-none pl-6 text-gray-300">
                <li>
                  <strong>Name:</strong> Sunil Kubavat
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:kubavatsunil2703@gmail.com"
                    className="text-emerald-500 hover:underline"
                  >
                    kubavatsunil2703@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://sunilkubavat.in"
                    className="text-emerald-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://sunilkubavat.in
                  </a>
                </li>
              </ul>
            </section>
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
