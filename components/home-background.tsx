"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"

export function HomeBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null
  
    return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-primary to-sky-600 h-screen">
     {/* Slower moving clouds */}
     <div className="cloud-container cloud-slow">
     <div className="cloud-image left-[5%] top-[15%]">
       <Image
         src="./projects/cloud.png"
         alt="Cloud"
         width={1080}
         height={550}
         className="opacity-60 w-full h-auto"
       />
     </div>
     <div className="cloud-image left-[60%] top-[10%]">
       <Image
         src="./projects/cloud.png"
         alt="Cloud"
         width={750}
         height={320}
         className="opacity-70 w-full h-auto"
       />
     </div>
   </div>

   {/* Medium speed clouds */}
   <div className="cloud-container cloud-medium">
     <div className="cloud-image-blur left-[30%] top-[40%]">
       <Image
         src="./projects/cloud.png"
         alt="Cloud"
         width={1080}
         height={550}
         className="w-full h-auto"
       />
     </div>
     <div className="cloud-image-blur left-[80%] top-[60%]">
       <Image
         src="./projects/cloud.png"
         alt="Cloud"
         width={750}
         height={320}
         className="opacity-80 w-full h-auto"
       />
     </div>
   </div>
 </div>
)
}

