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
            NVS-01
          </h1>
          <p className="py-2 text-lg text-start">
            GSLV-F12/NVS-01 mission is accomplished successfully on Monday, May
            29, 2023. This Geosynchronous Satellite Launch Vehicle (GSLV)
            mission deployed NVS-01 navigation satellite, weighing about 2232
            kg, into a Geosynchronous Transfer Orbit. The vehicle lifted off at
            10:42 hours IST from the second launch pad at SDSC-SHAR, Sriharikota
            and injected the satellite after about 19 minutes of flight. NVS-01
            is the first of the second-generation satellites envisaged for the
            Navigation with Indian Constellation (NavIC) services. NVS series of
            satellites will sustain and augment the NavIC with enhanced
            features. This series incorporates L1 band signals additionally to
            widen the services. For the first time, an indigenous atomic clock
            will be flown in NVS-01.
          </p>
        </div>
        <div className="pb-10">
          <Link href="https://www.isro.gov.in/media_isro/pdf/Missions/GSLVF12/GSLVF12_NVS01_Mission.pdf" target="_">
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
