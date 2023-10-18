/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import Overview from "@/components/launchers/Overview";
import LaunchStats from "@/components/launchers/LaunchStats";
import Stage1 from "@/components/launchers/Stage1";
import Stage2 from "@/components/launchers/Stage2";
import Stage3 from "@/components/launchers/Stage3";
import Stage4 from "@/components/launchers/Stage4";
import ReusableSlider from "@/components/launchers/Silder";
import { sslv } from "@/lib/data/SSLV";
import VideoHero from "@/components/VideoHero";
import ReusableHead from "@/components/Head";

const SSLV = () => {
  const items = [
    <Overview
      key={sslv.launcher}
      backgroundImage=""
      launcher={sslv.launcher}
      Height={sslv.Height}
      Diameter={sslv.Diameter}
      Mass={sslv.Mass}
      Stages={sslv.Stages}
      LEO={sslv.Payload.LEO.Mass}
      SSO={sslv.Payload.SSO.Mass}
      Varients={""}
      SUBGTO={""}
      GTO={""}
    />,
    <Stage1
      key={sslv.launcher}
      launcher={sslv.launcher}
      backgroundImage=""
      Diameter={sslv.FirstStage.Diameter}
      PropellantMass={sslv.FirstStage.PropellantMass}
      PoweredBy={sslv.FirstStage.PoweredBy}
      MaximumThrust={sslv.FirstStage.MaximumThrust}
      BurnTime={sslv.FirstStage.BurnTime}
      Propellant={sslv.FirstStage.Propellant}
      stageName={"First Stage – SS1"}
      SpecificImpulse={[]}
      Height={""}
    />,
    <Stage2
      key={sslv.launcher}
      launcher={sslv.launcher}
      backgroundImage=""
      Diameter={sslv.SecondStage.Diameter}
      PropellantMass={sslv.SecondStage.PropellantMass}
      PoweredBy={sslv.SecondStage.PoweredBy}
      MaximumThrust={sslv.SecondStage.MaximumThrust}
      BurnTime={sslv.SecondStage.BurnTime}
      Propellant={sslv.SecondStage.Propellant}
      stageName={"Second Stage – SS2"}
      Height={""}
      SpecificImpulse={[]}
    />,
    <Stage3
      key={sslv.launcher}
      launcher={sslv.launcher}
      backgroundImage=""
      Diameter={sslv.ThirdStage.Diameter}
      PropellantMass={sslv.ThirdStage.PropellantMass}
      PoweredBy={sslv.ThirdStage.PoweredBy}
      MaximumThrust={sslv.ThirdStage.MaximumThrust}
      BurnTime={sslv.ThirdStage.BurnTime}
      Propellant={sslv.ThirdStage.Propellant}
      stageName={"Third Stage – SS3"}
      Height={""}
      SpecificImpulse={[]}
    />,
    <Stage4
      key={sslv.launcher}
      launcher={sslv.launcher}
      backgroundImage=""
      Diameter={sslv.FourthStage.Diameter}
      PropellantMass={sslv.FourthStage.PropellantMass}
      PoweredBy={sslv.FourthStage.PoweredBy}
      Propellant={sslv.FourthStage.Propellant}
      stageName={"Fourth Stage – Velocity Trimming Module (VTM)"}
      Height={""}
      MaximumThrust={""}
      BurnTime={""}
      SpecificImpulse={[]}
    />,
  ];
  return (
    <div>
      <ReusableHead title={"Isro - SSLV"} />

      <Hero
        backgroundImage="/Lunchers/SSLVBG2.png"
        title="SSLV"
        subtitle="The Mini Orbiter"
      />

      <LaunchStats data={sslv.LaunchStatistics} />
      <Hero2 info={sslv.desc} />

      <ReusableSlider items={items} />
      <VideoHero
        backgroundImageUrl={"/Lunchers/SSLVBGLAUNCH.png"}
        title={"Video"}
        subtitle={"PSLV LAUNCH"}
        buttonText={"Watch Now"}
        buttonLink={"https://www.isro.gov.in/mission_SSLV_D2_lift-off.html"}
      />
    </div>
  );
};

export default SSLV;
