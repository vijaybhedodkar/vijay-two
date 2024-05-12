"use client"

import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Image from "next/image";
import InfiniteCards from "@/components/InfiniteCards"
import Developer from "@/components/Developer";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export default function Home() {
  const [loading, setLoading] = useState (true);

  useEffect(() => {
    // Simulating data fetching delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);



  return (
   <div>
    {loading ? <Loader/>: (
    <main className="min-h-screen bg-[#4AB] antialiased bg-grid-white/[0.02] w-fit lg:w-auto">
  
      <Header/>
      <Cards/>
   <InfiniteCards/>
   
  
  
    </main>
    )}

   </div>
  );
}
