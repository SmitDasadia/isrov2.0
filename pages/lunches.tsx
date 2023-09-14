"use client";
import Hero from "@/components/Lunches/Hero";
import Head from "next/head";
import React from "react";

const lunches = () => {
  return (
    <div>
      <Head>
        <title>Isro - Lunches</title>

        
      </Head>
      <Hero backgroundImage="lunches/lunches.jpg" title="Lunches"/>
    </div>
  );
};

export default lunches;
