"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { sidebarLinks } from "@/constants/index";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeMenu = () => {
    setIsSidebarVisible(false);
  };
  return (
    <nav
      className="bg-transparent py-4 absolute top-0 w-full"
      style={{
        // Make the Navbar transparent
        background: "none",
        zIndex: 999, // Add a high z-index value
      }}
    >
      <div className="container mx-auto flex justify-center sm:justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="https://concretecivil.com/wp-content/uploads/2017/02/Indian_Space_Research_Organisation_Logo.svg-1024x990.png"
              alt="Logo"
              className="w-16 h-16"
            />
          </div>
        </Link>
      </div>
      <button onClick={toggleSidebar} className="absolute top-7 right-7 ">
        <div className="w-6 h-[2.5px] bg-white mb-1   "></div>
        <div className="w-6 h-[2.5px] bg-white mb-1   "></div>
        <div className="w-6 h-[2.5px] bg-white mb-1   "></div>
      </button>
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.section
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`flex-col justify-between gap-12 h-screen overflow-auto sidebar fixed top-0 right-0 bg-[#030303] p-10 transform-all z-50  w-1/4`}
          >
            <span
              onClick={toggleSidebar}
              className="absolute top-7 right-7 cursor-pointer text-2xl "
            >
              <CgClose size={30} className="text-white" />
            </span>
            <nav className="flex w-full flex-1 flex-col gap-6 pt-20 p-15">
              {sidebarLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    onClick={closeMenu}
                    className={`relative flex justify-end rounded-br-2xl p-2 ${
                      isActive ? " text-white " : "text-white hover:underline"
                    }`}
                  >
                    <div className="flex items-center gap-1 font-bold">
                      <div className="font-bold text-lg">{link.label}</div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
