// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Hero = () => {
//   const fadeInVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
//   };

//   return (
//     <motion.section className="min-h-screen relative bg-black flex justify-center items-center">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('/adityal1bghero.png')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>
//       <div className="container mx-auto text-center" style={{ zIndex: 10 }}>
//         <motion.div
//           className="mb-8 text-center max-w-lg mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInVariants}
//         >
//           <h1 className="text-5xl  text-white font-extrabold">ADITYA-L1</h1>
//           <h3 className="text-2xl  text-white pt-5 pb-5">
//             Unveiling the Sun&apos;s secrets from space
//           </h3>
//           <div className="flex justify-center items-center">
//             <Link href="https://www.youtube.com/watch?v=_IcgGYZTXQw">
//               <button className="self-start   text-white hover:bg-white hover:text-black  py-4 px-10 text-lg font-semibold transition duration-300 text-center border-2">
//                 Watch Now
//               </button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

// ReusableHeroSection.tsx
"use client";
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `url('/AdityaL1/Aditya_L1Lunch2.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* <img src="/public/AdityaL1/Aditya_L1Lunch2.png" alt="" /> */}
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-4xl sm:text-4xl md:text-6xl text-white pb-2 font-extrabold">
            ADITYA-L1
          </h2>
          <p className="text-3xl sm:text-3xl md:text-5xl text-white font-semibold">
            Unveiling the Sun&apos;s secrets from space
          </p>
        </div>
        <div className="pt-5 pb-10">
          <Link href="https://www.youtube.com/watch?v=_IcgGYZTXQw" target="_">
            <button className="self-start ml-8 mb-16 bg-white hover:bg-black hover:text-white text-black py-4 px-16 text-lg font-semibold transition duration-300">
              ReWatch
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.section>

    
  );
};

export default Hero;
