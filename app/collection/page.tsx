import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AdSenseContainer from "@/components/adsense-container";

export default function CollectionPage() {
  // Collection items
  const collectionItems = [
    {
      id: 1,
      name: "Rose Gold Diamond Ring",
      image: "/images/ring-rose-gold.png",
      price: "$1,299",
    },
    {
      id: 2,
      name: "Gold Bangles",
      image: "/images/gold-bangles.png",
      price: "$2,499",
    },
    {
      id: 3,
      name: "Gold Diamond Ring",
      image: "/images/ring-gold.png",
      price: "$1,199",
    },
    {
      id: 4,
      name: "Silver Diamond Ring",
      image: "/images/ring-silver.png",
      price: "$999",
    },
    {
      id: 5,
      name: "Rolex Two-Tone Watch",
      image: "/images/rolex-two-tone.png",
      price: "$12,999",
    },
    {
      id: 6,
      name: "Diamond Eternity Bands",
      image: "/images/eternity-bands.png",
      price: "$1,899",
    },
    {
      id: 7,
      name: "Gold Necklace Set",
      image: "/images/gold-necklace-set.png",
      price: "$3,499",
    },
    {
      id: 8,
      name: "Rolex Sky-Dweller",
      image: "/images/rolex-sky-dweller.png",
      price: "$14,999",
    },
    {
      id: 9,
      name: "Gold Wavy Bangles",
      image: "/images/gold-wavy-bangles.png",
      price: "$2,299",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gold-500">Luxury Jewelry</h1>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/collection" className="text-gold-500">
            Collection
          </Link>
          <Link href="/about" className="hover:text-gold-500 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gold-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="text-gold-500 border-gold-500">
          Contact Us
        </Button>
      </header>

      {/* Top AdSense Banner */}
      <div className="w-full my-4">
        <AdSenseContainer position="top" />
      </div>

      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Exclusive Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gold-500/20 transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-contain bg-black"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gold-500 font-bold mt-2">{item.price}</p>
                <Button className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-black">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Side AdSense - Shown between items on mobile, on the side on desktop */}
        <div className="my-8 lg:hidden">
          <AdSenseContainer position="top" />
        </div>
        <div className="hidden lg:block fixed right-4 top-1/4">
          <AdSenseContainer position="side" />
        </div>
      </main>

      {/* Bottom AdSense Banner */}
      <div className="w-full mt-8">
        <AdSenseContainer position="bottom" />
      </div>

      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Luxury Jewelry Collection. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
