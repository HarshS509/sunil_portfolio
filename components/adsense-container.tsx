"use client"

import { useEffect, useRef } from "react"

interface AdSenseContainerProps {
  position: "top" | "side" | "bottom"
}

export default function AdSenseContainer({ position }: AdSenseContainerProps) {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Load AdSense script if it hasn't been loaded yet
    if (!window.adsbygoogle) {
      const script = document.createElement("script")
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      script.async = true
      script.crossOrigin = "anonymous"
      script.dataset.adClient = "ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
      document.head.appendChild(script)
    }

    // Push the ad to AdSense
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  // Different styles based on position
  const getContainerStyles = () => {
    switch (position) {
      case "top":
        return "w-full h-[90px] bg-black bg-opacity-70"
      case "side":
        return "w-[160px] h-[600px] bg-black bg-opacity-70"
      case "bottom":
        return "w-full h-[90px] bg-black bg-opacity-70"
      default:
        return "w-full h-[90px] bg-black bg-opacity-70"
    }
  }

  return (
    <div ref={adContainerRef} className={`${getContainerStyles()} flex items-center justify-center p-1`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
        data-ad-slot="XXXXXXXXXX" // Replace with your ad slot
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-white/50">
        Ad Space
      </div>
    </div>
  )
}

// Add this to make TypeScript happy with the adsbygoogle global
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

