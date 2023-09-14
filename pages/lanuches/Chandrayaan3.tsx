/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Chandrayaan3/Hero";
import Head from "next/head";
import Info from "@/components/Chandrayaan3/Info";

const Chandrayaan3 = () => {
  return (
    <div>
      <Head>
        <title>Isro - Chandrayaan-3</title>
      </Head>
      <Hero />
      <Info />
    </div>
  );
};

export default Chandrayaan3;
