import ReusableHead from "@/components/Head";
import Hero from "@/components/launchers/Hero";
import Head from "next/head";
import React from "react";

const gaganyaan = () => {
  return (
    <>
      <section>
        <ReusableHead title={"Isro - Gaganyaan"} /> 

        <Hero
          backgroundImage="/Gaganyaan/earth.png"
          title="Gaganyaan"
          subtitle="Pioneering Human Spaceflight"
        />

        
      </section>
    </>
  );
};

export default gaganyaan;
