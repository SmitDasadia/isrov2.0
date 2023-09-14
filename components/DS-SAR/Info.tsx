/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { adityaL1Mission } from "@/lib/data/adityal1";
import Link from "next/link";

const Info = () => {
  return (
    <motion.section className="min-h-screen bg-black text-white">
      <div className="container mx-auto md:px-5 pt-16 flex flex-col items-center">
        <div className="container mx-auto p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            DS-SAR
          </h1>
          <p className="py-2 text-lg text-start">
          The launch of PSLV-C56 carrying DS-SAR satellite, along with 6 co-passengers from the first launch-pad of SDSC-SHAR, Sriharikota is accomplished successfully on July 30, 2023 at 06:30 hrs IST.

PSLV-C56 is configured in its core-alone mode, similar to that of C55. It would launched DS-SAR, a 360 kg satellite into a Near-equatorial Orbit (NEO) at 5 degrees inclination and 535 km altitude.
The DS-SAR satellite is developed under a partnership between DSTA (representing the Government of Singapore) and ST Engineering. Once deployed and operational, it will be used to support the satellite imagery requirements of various agencies within the Government of Singapore. ST Engineering will use it for multi-modal and higher responsiveness imagery and geospatial services for their commercial customers.

DS-SAR carries a Synthetic Aperture Radar (SAR) payload developed by Israel Aerospace Industries (IAI). This allows the DS-SAR to provide for all-weather day and night coverage, and capable of imaging at 1m-resolution at full polarimetry.
          </p>
        </div>
        <div className="pb-10">
          <Link href="https://www.isro.gov.in/media_isro/pdf/Missions/PSLVC56/PSLV_C56_Mission_Brochure.pdf" target="_">
            <button className="flex justify-center items-center border hover:bg-white hover:text-black  py-4 px-16 text-lg font-semibold transition duration-300">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Info;
