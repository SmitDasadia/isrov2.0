/* eslint-disable react/jsx-key */
// components/Slider.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Overview from "./Overview";
import { pslv } from "@/lib/data/PSLV";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import Booster from "./Booster";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import PayloadFairing from "./PayloadFairing";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    <Overview
      backgroundImage=""
      launcher={pslv.launcher}
      Height={pslv.Height}
      Diameter={pslv.Diameter}
      Mass={pslv.Mass}
      Stages={pslv.Stages}
      LEO={pslv.Payload.LEO.Mass}
      SSO={pslv.Payload.SSO.Mass}
      SUBGTO={pslv.Payload.SubGTO.Mass}
      GTO={pslv.Payload.GTO.Mass}
      Varients={pslv.Variants}
    />,
    <Booster
      launcher={pslv.launcher}
      backgroundImage=""
      Noboosters={pslv.Boosters.Noboosters}
      Height={pslv.Boosters.Height}
      Diameter={pslv.Boosters.Diameter}
      PropellantMass={pslv.Boosters.PropellantMass}
      PoweredBy={pslv.Boosters.Noboosters}
      MaximumThrust={pslv.Boosters.MaximumThrust}
      TotalThrust={pslv.Boosters.TotalThrust}
      SpecificImpulse={pslv.Boosters.SpecificImpulse}
      BurnTime={pslv.Boosters.BurnTime}
      Propellant={pslv.Boosters.Propellant}
    />,
    <Stage1
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.FirstStage.Height}
      Diameter={pslv.FirstStage.Diameter}
      PropellantMass={pslv.FirstStage.PropellantMass}
      PoweredBy={pslv.FirstStage.PoweredBy}
      MaximumThrust={pslv.FirstStage.MaximumThrust}
      SpecificImpulse={pslv.FirstStage.SpecificImpulse}
      BurnTime={pslv.FirstStage.BurnTime}
      Propellant={pslv.FirstStage.Propellant}
    />,
    <Stage2
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.SecondStage.Height}
      Diameter={pslv.SecondStage.Diameter}
      PropellantMass={pslv.SecondStage.PropellantMass}
      PoweredBy={pslv.SecondStage.PoweredBy}
      MaximumThrust={pslv.SecondStage.MaximumThrust}
      SpecificImpulse={pslv.SecondStage.SpecificImpulse}
      BurnTime={pslv.SecondStage.BurnTime}
      Propellant={pslv.SecondStage.Propellant}
    />,
    <Stage3
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.ThirdStage.Height}
      Diameter={pslv.ThirdStage.Diameter}
      PropellantMass={pslv.ThirdStage.PropellantMass}
      PoweredBy={pslv.ThirdStage.PoweredBy}
      MaximumThrust={pslv.ThirdStage.MaximumThrust}
      SpecificImpulse={pslv.ThirdStage.SpecificImpulse}
      BurnTime={pslv.ThirdStage.BurnTime}
      Propellant={pslv.ThirdStage.Propellant}
    />,
    <Stage4
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.FourthStage.Height}
      Diameter={pslv.FourthStage.Diameter}
      PropellantMass={pslv.FourthStage.PropellantMass}
      PoweredBy={pslv.FourthStage.PoweredBy}
      MaximumThrust={pslv.FourthStage.MaximumThrust}
      SpecificImpulse={pslv.FourthStage.SpecificImpulse}
      BurnTime={pslv.FourthStage.BurnTime}
      Propellant={pslv.FourthStage.Propellant}
    />,
    <PayloadFairing
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.PayloadFairing.Height}
      Diameter={pslv.PayloadFairing.Diameter}
      Weight={pslv.PayloadFairing.Weight}
      Construction={pslv.PayloadFairing.Construction}
      Material={pslv.PayloadFairing.Material}
      SeparationMechanisms={pslv.PayloadFairing.SeparationMechanisms}
      AcousticProtection={pslv.PayloadFairing.AcousticProtection}
    />,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={``}
      >
        {items[currentIndex]}
      </motion.div>

      <div className="flex justify-center space-x-4 absolute bottom-4 left-0 right-0 pt-5">
        <CgChevronLeft
          className="text-white text-2xl cursor-pointer"
          onClick={prevSlide}
        />

        <CgChevronRight
          className="text-white text-2xl cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
