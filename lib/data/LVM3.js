export const lvm3 = {
    launcher: "LVM3",
    desc: "The Launch Vehicle Mark-3 is a three-stage medium-lift launch vehicle developed by the Indian Space Research Organisation (ISRO). Primarily designed to launch communication satellites into geostationary orbit,it is also due to launch crewed missions under the Indian Human Spaceflight Programme.LVM3 has a higher payload capacity than its predecessor, GSLV.",
    Size: {
        Height: '43.43 m (142.5 ft)',
        Diameter: '4 m (13 ft)',
        Mass: '640,000 kg (1,410,000 lb)',
        Stages: 3,
    },
    Capacity: {
        PayloadToLEO: {
            Mass: '10,000 kg (22,000 lb)',
        },
        PayloadToGTO: {
            Mass: '4,000 kg (8,800 lb)',
        },
    },

    LaunchStatistics: {
        Status: 'Active',
        TotalLaunches: 7,
        Successes: 7,
        Failures: 0,
        PartialFailures: 0,
        FirstFlight: {
            Suborbital: '18 December 2014',
            Orbital: '5 June 2017',
        },
        LastFlight: '14 July 2023',
    },
    FirstStage: {
        S200Boosters: {
            Height: '25 m (82 ft)',
            Diameter: '3.2 m (10 ft)',
            EmptyMass: '31,000 kg (68,000 lb) each',
            GrossMass: '236,000 kg (520,000 lb) each',
            PropellantMass: '205,000 kg (452,000 lb) each',
            PoweredBy: 'Solid S200',
            MaximumThrust: '5,150 kN (525 tf)',
            SpecificImpulse: ['274.5 seconds (2.692 km/s) (vacuum)'],
            BurnTime: '128 s',
            Propellant: 'HTPB',
        },
    },
    SecondStage: {
        L110: {
            Height: '21.39 m (70.2 ft)',
            Diameter: '4.0 m (13.1 ft)',
            EmptyMass: '9,000 kg (20,000 lb)',
            GrossMass: '125,000 kg (276,000 lb)',
            PropellantMass: '116,000 kg (256,000 lb)',
            PoweredBy: '2 Vikas engines',
            MaximumThrust: '1,598 kN (163.0 tf)',
            SpecificImpulse: ['293 seconds (2.87 km/s)'],
            BurnTime: '203 s',
            Propellant: 'UDMH / N2O4',
        },
    },
    ThirdStage: {
        C25: {
            Height: '13.545 m (44.44 ft)',
            Diameter: '4.0 m (13.1 ft)',
            EmptyMass: '5,000 kg (11,000 lb)',
            GrossMass: '33,000 kg (73,000 lb)',
            PropellantMass: '28,000 kg (62,000 lb)',
            PoweredBy: '1 CE-20',
            MaximumThrust: '186.36 kN (19.003 tf)',
            SpecificImpulse: ['442 seconds (4.33 km/s)'],
            BurnTime: '643 s',
            Propellant: 'LOX / LH2',
        },
    },
};
