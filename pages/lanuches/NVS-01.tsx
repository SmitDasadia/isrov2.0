/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "@/components/NVS01/Hero";
import Info from "@/components/NVS01/Info";

const NVS01 = () => {
  return (
    <div>
      <Head>
        <title>Isro - NVS-01</title>
      </Head>
      <Hero />
      <Info/>
    </div>
  );
};

export default NVS01;
