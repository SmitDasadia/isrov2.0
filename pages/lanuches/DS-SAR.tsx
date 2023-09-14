/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "@/components/DS-SAR/Hero";
import Info from "@/components/DS-SAR/Info";

const DSSAR = () => {
  return (
    <div>
      <Head>
        <title>Isro - DS-SAR</title>
      </Head>
      <Hero />
      <Info/>
    </div>
  );
};

export default DSSAR;
