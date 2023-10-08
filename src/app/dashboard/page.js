"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
function page() {
    const router = useRouter();
    return (
        <div>
            <h1>pages</h1>
            <button onClick={() => router.push("/")}> click on me :/</button>
            {/* <div style={{ width: "100%", height: "100%" }}>
          <Image
            src="/home.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={500}
            height={500}
            priority
          />
        </div> */}
        </div>
    )
}

export default page
