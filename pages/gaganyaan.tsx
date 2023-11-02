import ReusableHead from "@/components/Head";
import Hero from "@/components/launchers/Hero";
import React from "react";
import { gaganyaan } from "@/lib/data/Gaganyann";
import Info from "@/components/Gaganyann/Info";
import LaunchVehicles from "@/components/launchers/LaunchVehicles";
import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSilder";

const slides = [
  {
    image: "/Gaganyaan/CryogenicStageTest.png",
    title: "February 17, 2017",
    subtitle: "Cryogenic Stage Test",
  },
  {
    image:
      "/Gaganyaan/GaganyaanServiceModulePropulsionSystem(SMPS)HotTestPhase1.png",
    title: "August 28, 2021",
    subtitle:
      "Gaganyaan Service Module Propulsion System (SMPS) Hot Test Phase1",
  },
  {
    image:
      "/Gaganyaan/SuccessfulcompletionofSystemDemonstrationModel(SDM)testsforCrewModulePropulsionSystem.png",
    title: "Apr 5, 2023",
    subtitle:
      "Successful completion of System Demonstration Model (SDM) tests for Crew Module Propulsion System",
  },
  {
    image: "/Gaganyaan/L110.png",
    title: "Apr 6, 2023",
    subtitle: "Liquid Stage(L110)-Engine(VIKAS) Qulification Test",
  },

  {
    image: "/Gaganyaan/CrewModulePropulsionSystem-SystemDemonstrationModel.png",
    title: "May 12, 2023",
    subtitle: "Crew Module Propulsion System-System Demonstration Model",
  },
  {
    image: "/Gaganyaan/HS200.png",
    title: "May 13, 2023",
    subtitle: "Soild Booster(HS200) - Static Test",
  },
  {
    image:
      "/Gaganyaan/GaganyaanServiceModulePropulsionSystem(SMPS)HotTest-1.png",
    title: "July 19, 2023",
    subtitle:
      "Gaganyaan Service Module Propulsion System (SMPS) Hot Test Phase2 - 1",
  },
  {
    image: "/Gaganyaan/RecoveryTeamapproachingCMRM.png",
    title: "July 20, 2023",
    subtitle:
      "Commencement of Harbor Trials for the Gaganyaan Recovery operations",
  },
  {
    image:
      "/Gaganyaan/GaganyaanServiceModulePropulsionSystem(SMPS)HotTestPhase2-2&3.png",
    title: "July 26, 2023",
    subtitle:
      "Gaganyaan Service Module Propulsion System (SMPS) Hot Test Phase2 - 2&3",
  },
  {
    image: "/Gaganyaan/DrogueParachuteDeploymentTests.png",
    title: "August 08-10, 2023",
    subtitle: "Drogue Parachute Deployment Tests",
  },
  {
    image: "/Gaganyaan/Lowaltitudeescapemotortest.png",
    title: "August 10, 2023",
    subtitle: "Gaganyaan Low Altitude Escape Motor (LEM) Static Test",
  },
  {
    image: "/Gaganyaan/CESJettisoningMotor(CJM)StaticTest.png",
    title: "August 10, 2023",
    subtitle: "CES Jettisoning Motor (CJM) Static Test",
  },
  {
    image: "/Gaganyaan/HighaltitudeEscapeMotor(HEM)StaticTest.png",
    title: "August 10, 2023",
    subtitle: "High altitude Escape Motor (HEM) Static Test",
  },
  {
    image: "/Gaganyaan/FirstCrewModuleforGaganyaantestflighttakesshape.png",
    title: "October 06, 2023",
    subtitle: "First Crew Module for Gaganyaan test flight takes shape",
  },
];

const Gaganyaan = () => {
  return (
    <>
      <section>
        <ReusableHead title={"Isro - Gaganyaan"} />

        <Hero
          backgroundImage="/Gaganyaan/earth.png"
          title="Gaganyaan"
          subtitle="Pioneering Human Spaceflight"
        />

        <Info
          isBgImg={false}
          backgroundImage=""
          title=""
          desc={gaganyaan.description}
        />

        <motion.section className="min-h-screen text-white">
          <h1 className="text-2xl sm:text-6xl font-bold text-center pb-5">
            The Vehicle
          </h1>
          <LaunchVehicles
            name={"Human rated LVM3 - HLVM3"}
            description={
              "LVM3 rocket - The well proven and reliable heavy lift launcher of ISRO, is identified as the launch vehicle for Gaganyaan mission. It consists of solid stage, liquid stage and cryogenic stage. All systems in LVM3 launch vehicle are re-configured to meet human rating requirements and christened Human Rated LVM3. HLVM3 will be capable of launching the Orbital Module to an intended Low Earth Orbit of 400 km."
            }
            img={""}
            path={"#"}
            alignment={"right"}
          />
        </motion.section>

        <motion.section className="min-h-screen text-white">
          <h1 className="text-2xl sm:text-5xl font-bold text-center pb-10">
            The Road to Making Human Spaceflight
          </h1>
          <ImageSlider slides={slides} />
        </motion.section>
      </section>
    </>
  );
};

export default Gaganyaan;
