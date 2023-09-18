export const sslv = {
    launcher: "SSLV",
    desc: "The Small Satellite Launch Vehicle (SSLV) is a small expendable launch vehicle being developed by the Indian Space Research Organisation (ISRO) to cater to the growing demand for launching small satellites. It is designed to provide a cost-effective and reliable launch solution for small satellite missions.",

    Height: "34 m (112 ft)",
    Diameter: "2 m (6 ft 7 in)",
    Mass: "120 t (120 long tons; 130 short tons)",
    Stages: 3+1,
    Payload: {
        LEO: {
            Mass: "500 kg (1,100 lb)",
            Description: "Payload to LEO "
        },
        SSO: {
            Mass: "300 kg (660 lb)",
            Description: "Payload to SSO "
        },
    },
    LaunchStatistics: {
        Status: "Active",
        LaunchSites: "Satish Dhawan Space Centre",
        TotalLaunches: 2,
        Successes: 1,
        Failures: 1,
        PartialFailures: 0,
        FirstFlight: "03:48 UTC, 7 August 2022",
        LastFlight: "10 February 2023, EOS-07",
    },
    FirstStage: {
        Diameter: "2 m",
        PropellantMass: "87,000 kg (192,000 lb)",
        PoweredBy: "S85",
        MaximumThrust: "2,496 kN (vac)",
        BurnTime: "94.3 s",
        Propellant: "Solid (HTPB based)",

    },
    SecondStage: {
        Diameter: "2 m",
        PropellantMass: "7,700 kg (17,000 lb)",
        PoweredBy: "S7",
        MaximumThrust: "234.2 kN (vac)",
        BurnTime: "113.1 s",
        Propellant: "Solid (HTPB based)",

    },
    ThirdStage: {
        Diameter: "1.7 m",
        PropellantMass: "4,500 kg (9,900 lb)",
        PoweredBy: "S4",
        MaximumThrust: "160 kN (vac)",
        BurnTime: "106.9 s",
        Propellant: "Solid (HTPB based)",
    },
    FourthStage: {
        Diameter: "2 m",
        PropellantMass: "50 kg (110 lb)",
        PoweredBy: "16×50N bipropellant thrusters",
        Propellant: "MMH+MON3 Liquid",

    },
};
