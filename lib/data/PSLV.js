export const pslv = {
  launcher: "PSLV",
  desc: "The Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle and an expendable medium-lift launch vehicle designed , operated by the Indian Space Research Organisation (ISRO).PSLV earned its title 'the workhorse of ISRO' through consistently delivering various satellites into low earth orbits, particularly the IRS Series of satellites.",
  Height: "44 m (144 ft)",
  Diameter: "2.8 m (9 ft 2 in)",
  Mass: "320,000 kg (710,000 lb)",
  Variants: "4 (PSLV,CA,DL,QL,XL)",
  Stages: 4,
  LaunchStatistics: {
    TotalLaunches: 59,
    Successes: 56,
    Failures: 2,
    PartialFailures: 1,
  },
  Payload: {
    LEO: {
      Mass: "3,800 kg (8,400 lb)",
      Description: "Payload to LEO "
    },
    SSO: {
      Mass: "1,750 kg (3,860 lb)",
      Description: "Payload to SSO "
    },
    SubGTO: {
      Mass: "1,425 kg (3,142 lb)",
      Description: "Payload to Sub-GTO "
    },
    GTO: {
      Mass: "1,300 kg (2,900 lb)",
      Description: "Payload to GTO"
    }
  },
  Boosters: {
    Noboosters: "6 (XL) 4 (QL) 2 (DL)",
    Height: "12 m (39 ft)",
    Diameter: "1 m (3 ft 3 in)",
    PropellantMass: "12,200 kg (26,900 lb) each",
    PoweredBy: "off",
    MaximumThrust: "703.5 kN (158,200 lbf)",
    TotalThrust: [
      "4,221 kN (949,000 lbf) (XL)",
      "2,814 kN (633,000 lbf) (QL)",
      "1,407 kN (316,000 lbf) (DL)"
    ],
    SpecificImpulse: ["262 s (2.57 km/s)"],
    BurnTime: "70 s",
    Propellant: "HTPB"

  },
  FirstStage: {
    Height: "20 m (66 ft)",
    Diameter: "2.8 m (9 ft 2 in)",
    PropellantMass: "138,200 kg (304,700 lb) each",
    PoweredBy: "S139",
    MaximumThrust: "4,846.9 kN (1,089,600 lbf)",
    SpecificImpulse: [
      "237 s (2.32 km/s) (sea level)",
      " 269 s (2.64 km/s) (vacuum)"
    ],
    BurnTime: "110 s",
    Propellant: "HTPB"
  },
  SecondStage: {
    Height: "12.8 m (42 ft)",
    Diameter: "2.8 m (9 ft 2 in)",
    PropellantMass: "42,000 kg (93,000 lb) each",
    PoweredBy: "1 Vikas",
    MaximumThrust: "803.7 kN (180,700 lbf)",
    SpecificImpulse: [
      "293 s (2.87 km/s)"
    ],
    BurnTime: "133 s",
    Propellant: "N2O4/UDMH"
  },
  ThirdStage: {
    Height: "3.6 m (12 ft)",
    Diameter: "2 m (6 ft 7 in)",
    PropellantMass: "7,600 kg (16,800 lb) each",
    PoweredBy: "S-7",
    MaximumThrust: "250 kN (56,000 lbf)",
    SpecificImpulse: [
      "295 s (2.89 km/s)"
    ],
    BurnTime: "113.5 s",
    Propellant: "HTPB"
  },
  FourthStage: {
    Height: "3 m (9.8 ft)",
    Diameter: "1.3 m (4 ft 3 in)",
    PropellantMass: "2,500 kg (5,500 lb) each",
    PoweredBy: "2 x L-2-5",
    MaximumThrust: "14.66 kN (3,300 lbf)",
    SpecificImpulse: [
      "308 s (3.02 km/s)"
    ],
    BurnTime: "525 s",
    Propellant: "MMH/MON"
  },
  PayloadFairing: {
    Weight: "1,182 kilograms (2,606 lb)",
    Diameter: "3.2 meters",
    Height: "8.3 meters",
    Construction: "Isogrid construction",
    Material: "7075 aluminum alloy with a 3 mm thick steel nose-cap",
    SeparationMechanisms:
      "The two halves of the fairing are separated using a pyrotechnic device-based jettisoning system consisting of horizontal and lateral separation mechanisms.",
    AcousticProtection:
      "To protect spacecraft from damage due to excessive acoustic loads during launch, the heatshield interior is lined with acoustic blankets.",
  },
  
  StageControlMechanisms: {
    Stage1: {
      Pitch: "SITVC",
      Yaw: "SITVC",
      Roll: "RCT and SITVC in 2 PSOMs",
    },
    Stage2: {
      Pitch: "Engine Gimbal",
      Yaw: "Engine Gimbal",
      Roll: "HRCM Hot Gas Reaction Control Motor",
    },
    Stage3: {
      Pitch: "Nozzle Flex",
      Yaw: "Nozzle Flex",
      Roll: "PS4 RCS",
    },
    Stage4: {
      Pitch: "Engine Gimbal",
      Yaw: "Engine Gimbal",
      Roll: "PS4 RCS into payload",
    },
  },
}



// export const pslv = {
//   launcher: "PSLV",
 

// }

