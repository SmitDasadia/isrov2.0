/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import { pslv } from "@/lib/data/PSLV";
import Overview from "@/components/launchers/Overview";
import LaunchStats from "@/components/launchers/LaunchStats";
import Booster from "@/components/launchers/Booster";
import Stage1 from "@/components/launchers/Stage1";
import Stage2 from "@/components/launchers/Stage2";
import Stage3 from "@/components/launchers/Stage3";
import Stage4 from "@/components/launchers/Stage4";
import PayloadFairing from "@/components/launchers/PayloadFairing";
import ReusableSlider from "@/components/launchers/Silder";
const PSLV = () => {
  const items = [
    <Overview
      key={pslv.launcher}
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
      key={pslv.launcher}
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
      key={pslv.launcher}
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.FirstStage.Height}
      Diameter={pslv.FirstStage.Diameter}
      PropellantMass={pslv.FirstStage.PropellantMass}
      PoweredBy={pslv.FirstStage.PoweredBy}
      MaximumThrust={pslv.FirstStage.MaximumThrust}
      SpecificImpulse={pslv.FirstStage.SpecificImpulse}
      BurnTime={pslv.FirstStage.BurnTime}
      Propellant={pslv.FirstStage.Propellant} stageName={""}    />,
    <Stage2
      key={pslv.launcher}
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
      stageName={""} 
    />,
    <Stage3
      key={pslv.launcher}
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
      stageName={""} 
    />,
    <Stage4
      key={pslv.launcher}
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
      stageName={""} 
    />,
    <PayloadFairing
      key={pslv.launcher}
      launcher={pslv.launcher}
      backgroundImage=""
      Height={pslv.PayloadFairing.Height}
      Diameter={pslv.PayloadFairing.Diameter}
      Weight={pslv.PayloadFairing.Weight}
      Construction={pslv.PayloadFairing.Construction}
      Material={pslv.PayloadFairing.Material}
      SeparationMechanisms={pslv.PayloadFairing.SeparationMechanisms}
      AcousticProtection={pslv.PayloadFairing.AcousticProtection}
      stageName={""} 
    />,
  ];
  return (
    <div>
      <Head>
        <title>Isro - PSLV</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/PSLVBG3.png"
        title="PSLV"
        subtitle="The Workhorse of ISRO"
      />

      <LaunchStats data={pslv.LaunchStatistics} />
      <Hero2 backgroundImage="" info={pslv.desc} />

      <ReusableSlider items={items} />
    </div>
  );
};

export default PSLV;
