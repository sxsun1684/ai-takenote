"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";
import HomePageHeader from "./_component/HomePageHeader";
import Hero from "./_component/Hero";

export default function Home() {

 
  return (
    <div>
      <HomePageHeader/>
      <Hero/>
    </div>
    
  )
}
