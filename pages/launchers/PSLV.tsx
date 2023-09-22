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
import VideoHero from "@/components/VideoHero";
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
      stageName={"Boosters (PSLV-XL/QL/DL)"}
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
      Propellant={pslv.FirstStage.Propellant}
      stageName={"First Stage"}
    />,
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
      stageName={"Second stage"}
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
      stageName={"Third stage"}
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
      stageName={"Fourth Stage"}
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
      stageName={"Payload Fairing"}
    />,
  ];
  return (
    <div>
      <Head>
        <title>Isro - PSLV</title>
        <link rel="icon" href="/Isro.png" sizes="any" />

      </Head>
      
      <Hero
        backgroundImage="/Lunchers/PSLVBG3.png"
        title="PSLV"
        subtitle="The Workhorse of ISRO"
      />

      <LaunchStats data={pslv.LaunchStatistics} />

      <Hero2 backgroundImage="" info={pslv.desc} />

      <ReusableSlider items={items} />

      <VideoHero
        backgroundImageUrl={"/Lunchers/PSLVBGLAUNCH.png"}
        title={"Video"}
        subtitle={"PSLV LAUNCH"}
        buttonText={"Watch Now"}
        buttonLink={"https://twitter.com/i/status/1685519623460917248"}
      />
    </div>
  );
};

export default PSLV;
