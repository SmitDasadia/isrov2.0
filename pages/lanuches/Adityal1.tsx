/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Adityal1/Hero";
import Head from "next/head";
import Info from "@/components/Adityal1/Info";

const adityal1 = () => {
  return (
    <div>
      <Head>
        <title>Isro - Aditya-L1</title>
      </Head>
      <Hero />
      <Info/>
    </div>
  );
};

export default adityal1;
