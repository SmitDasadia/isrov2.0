/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import Overview from "@/components/launchers/Overview";
import LaunchStats from "@/components/launchers/LaunchStats";
import Booster from "@/components/launchers/Booster";
import Stage1 from "@/components/launchers/Stage1";
import Stage2 from "@/components/launchers/Stage2";
import Stage3 from "@/components/launchers/Stage3";
import PayloadFairing from "@/components/launchers/PayloadFairing";
import ReusableSlider from "@/components/launchers/Silder";
import { gslv } from "@/lib/data/GSLV";
import VideoHero from "@/components/VideoHero";

const GSLV = () => {
  const items = [
    <Overview
      key={gslv.launcher}
      backgroundImage="/Lunchers/gslvoverview.png"
      launcher={gslv.launcher}
      Height={gslv.Height}
      Diameter={gslv.Diameter}
      Mass={gslv.Mass}
      Stages={gslv.Stages}
      LEO={gslv.Payload.LEO.Mass}
      SSO={gslv.Payload.SSO.Mass}
      // SUBGTO={gslv.Payload.SubGTO.Mass}
      GTO={gslv.Payload.GTO.Mass}
      Varients={gslv.Variants}
      SUBGTO={""} // Varients={gslv.Variants}
    />,
    <Booster
      key={gslv.launcher}
      launcher={gslv.launcher}
      backgroundImage="/Lunchers/gslvbooster.png"
      Noboosters={gslv.Boosters.Noboosters}
      Height={gslv.Boosters.Height}
      Diameter={gslv.Boosters.Diameter}
      PropellantMass={gslv.Boosters.PropellantMass}
      PoweredBy={gslv.Boosters.Noboosters}
      MaximumThrust={gslv.Boosters.MaximumThrust}
      TotalThrust={gslv.Boosters.TotalThrust}
      SpecificImpulse={gslv.Boosters.SpecificImpulse}
      BurnTime={gslv.Boosters.BurnTime}
      Propellant={gslv.Boosters.Propellant} stageName={"Boosters"}    />,
    <Stage1
      key={gslv.launcher}
      launcher={gslv.launcher}
      backgroundImage="/Lunchers/gslvstage1.png"
      Height={gslv.FirstStage.Height}
      Diameter={gslv.FirstStage.Diameter}
      PropellantMass={gslv.FirstStage.PropellantMass}
      PoweredBy={gslv.FirstStage.PoweredBy}
      MaximumThrust={gslv.FirstStage.MaximumThrust}
      SpecificImpulse={gslv.FirstStage.SpecificImpulse}
      BurnTime={gslv.FirstStage.BurnTime}
      Propellant={gslv.FirstStage.Propellant} stageName={"First Stage"}    />,
    <Stage2
      key={gslv.launcher}
      launcher={gslv.launcher}
      backgroundImage="/Lunchers/gslvstage2.jpg"
      Height={gslv.SecondStage.Height}
      Diameter={gslv.SecondStage.Diameter}
      PropellantMass={gslv.SecondStage.PropellantMass}
      PoweredBy={gslv.SecondStage.PoweredBy}
      MaximumThrust={gslv.SecondStage.MaximumThrust}
      SpecificImpulse={gslv.SecondStage.SpecificImpulse}
      BurnTime={gslv.SecondStage.BurnTime}
      Propellant={gslv.SecondStage.Propellant} stageName={"Second Stage"}    />,
    <Stage3
      key={gslv.launcher}
      launcher={gslv.launcher}
      backgroundImage="/Lunchers/gslvstage3.png"
      Height={gslv.ThirdStage.Height}
      Diameter={gslv.ThirdStage.Diameter}
      PropellantMass={gslv.ThirdStage.PropellantMass}
      PoweredBy={gslv.ThirdStage.PoweredBy}
      MaximumThrust={gslv.ThirdStage.MaximumThrust}
      SpecificImpulse={gslv.ThirdStage.SpecificImpulse}
      BurnTime={gslv.ThirdStage.BurnTime}
      Propellant={gslv.ThirdStage.Propellant} stageName={"Third Stage"}    />,
    <PayloadFairing
      key={gslv.launcher}
      launcher={gslv.launcher}
      backgroundImage="/Lunchers/gslvpayloadfairing.jpg"
      Height={gslv.PayloadFairing.Height}
      Diameter={gslv.PayloadFairing.Diameter}
      Weight={""}
      Construction={""}
      Material={""}
      SeparationMechanisms={""}
      AcousticProtection={""} stageName={"Paload Fairing"}    />,
  ];
  return (
    <div>
      <Head>
        <title>Isro - GSLV</title>
        <link rel="icon" href="/Isro.png" sizes="any" />

      </Head>
      <Hero
        backgroundImage="/Lunchers/GSLVBG3.png"
        title="GSLV"
        subtitle="The Orbit Master"
      />

      <LaunchStats data={gslv.LaunchStatistics} />
      <Hero2  info={gslv.desc} />

      <ReusableSlider items={items} />

      <VideoHero backgroundImageUrl={"/Lunchers/GSLVBGLAUNCH.png"} title={"Video"} subtitle={"GSLV LAUNCH"} buttonText={"Watch Now"} buttonLink={"https://twitter.com/i/status/1663051206338531329"}/>
    </div>
  );
};

export default GSLV;
