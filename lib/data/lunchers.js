export const lunchers = {
    desc: "Launchers or Launch Vehicles are used to carry spacecraft to space.",
    operational: {
        pslv: {
            name: "Polar Satellite Launch Vehicle (PSLV)",
            description:
                "PSLV is configured with four variants like 6, 4, 2 solid rocket strap-on motors & core alone versions. Variants will be chosen based on the payload weights & orbit to be accomplished. PSLV has been a versatile launch vehicle deployed for launching all three types of payloads viz. Earth Observation, Geo-stationary, and Navigation. It has got the highest success rate and is considered as the workhorse of ISRO.",
            img: "/Lunchers/PSLV.png",
            path:"/launchers/PSLV"
        },
        gslv: {
            name: "Geosynchronous Satellite Launch Vehicle (GSLV)",
            description:
                "GSLV with indigenous Cryogenic Upper Stage has enabled the launching of up to 2-tonne class of communication satellites.",
            img: "/Lunchers/GSLV.png",
            path:"/launchers/GSLV"
        },
        lvm3: {
            name: "Geosynchronous Satellite Launch Vehicle Mk-III (LVM3)",
            description:
                "The LVM3 is the next-generation launch vehicle capable of launching 4-tonne class of communication satellites and 10-tonne class of payloads to LEOs. The vehicle was developed with completely indigenized technologies, including the C25 cryo stage. The launch vehicle has a track record of all successful launches even from the first development flight. The Human rated LVM3 is identified as the launch vehicle for the Gaganyaan mission, which is named as HRLV.",
            img: "/Lunchers/LVM3.png",
            path:"/launchers/LVM3"
        },
        SoundingRockets: {
            name: "Sounding Rockets(Rohini)",
            description:
                "Sounding rockets are one or two stage solid propellant rockets used for probing the upper atmospheric regions and for space research. They also serve as easily affordable platforms to test or prove prototypes of new components or subsystems intended for use in launch vehicles and satellites.",
            img: "/Lunchers/SoundingRockets.png",
            path:"/launchers/Rohini"
        },
    },
    underDevelopment: {
        hrlv: {
            name: "Human Rated Launch Vehicle (HRLV)",
            description:
                "The Human Rated Launch Vehicle (HRLV) is being developed for the Gaganyaan mission.",
            img: ""
        },
        sslv: {
            name: "Small Satellite Launch Vehicle (SSLV)",
            description:
                "The Small Satellite Launch Vehicle (SSLV) is being developed with complete indigenous technologies to meet the small satellite launch market on a demand-driven basis.",
            img: ""
        },
        rlvtd: {
            name: "Reusable Launch Vehicle - Technology Demonstrator (RLV-TD)",
            description:
                "The Reusable Launch Vehicle - Technology Demonstrator (RLV-TD) is under development for technology demonstration.",
            img: ""
        },
        scramjet: {
            name: "Scramjet Engine - Technology Demonstrator (Scramjet Engine - TD)",
            description:
                "The Scramjet Engine - Technology Demonstrator (Scramjet Engine - TD) is under development for technology demonstration.",
            img: ""
        },
    },
    retired: {
        slv3: {
            name: "Satellite Launch Vehicle-3 (SLV-3)",
            description: "SLV-3 was India's first experimental satellite launch vehicle.",
            img: ""
        },
        aslv: {
            name: "Augmented Satellite Launch Vehicle (ASLV)",
            description: "ASLV was used for launching satellites into polar orbits.",
            img: ""
        },
    },
};

//   // Example of accessing launch vehicle information:
//   console.log(launchVehicles.operational.pslv.name); // Output: "Polar Satellite Launch Vehicle (PSLV)"
//   console.log(launchVehicles.underDevelopment.sslv.description); // Output: "The Small Satellite Launch Vehicle (SSLV) is being developed with complete indigenous technologies to meet the small satellite launch market on a demand-driven basis."


