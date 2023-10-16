"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
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
        background: "none",
        zIndex: 999,
      }}
    >
      <header>
        <div className="container mx-auto flex items-center justify-center sm:justify-between">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="https://concretecivil.com/wp-content/uploads/2017/02/Indian_Space_Research_Organisation_Logo.svg-1024x990.png"
                alt="Logo"
                className="w-16 h-16"
              />
            </div>
          </Link>
          <div className="hidden sm:flex sm:flex-grow sm:justify-center">
            {sidebarLinks.slice(0, 5).map((link) => (
              <Link href={link.route} key={link.label}>
                <div className="text-md sm:text-xl text-white px-5 font-semibold sidebar-link">
                  {link.label}
                  <div className="link-underline"></div>
                </div>
              </Link>
            ))}
          </div>
          <button onClick={toggleSidebar} className="absolute top-7 right-7 ">
            <CgMenuRightAlt size={28} className="text-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isSidebarVisible && (
          <motion.section
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "50%" }}
            transition={{
              type: "spring",
              stiffness: 225, // Adjust the stiffness for smoother animation
              damping: 20, // Adjust the damping for smoother animation
              duration: 0.2, // Adjust the duration for smoother animation
            }}
            className={`flex-col justify-between gap-12 h-screen overflow-auto sidebar fixed top-0 right-0 bg-[#030303] p-4 sm:p-10 transform-all transition-width duration-100 z-50 w-2/3 sm:w-2/3 lg:w-1/3 xl:w-1/4`}
          >
            <span
              onClick={toggleSidebar}
              className="absolute top-6 right-6 cursor-pointer text-xl sm:text-2xl text-white"
            >
              <CgClose size={28} className="text-white" />
            </span>
            <nav className="hidden sm:flex w-full flex-1 flex-col gap-4 sm:gap-6 pt-8 sm:pt-20 p-4 sm:p-15">
              {sidebarLinks.slice(5).map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    onClick={closeMenu}
                    className={`relative flex items-center p-2 sm:p-1 rounded-lg sidebar-link ${
                      isActive ? "text-white font-bold" : "text-white"
                    }`}
                  >
                    <div className="text-lg sm:text-xl">{link.label}</div>
                    <div className="link-underline"></div>
                  </Link>
                );
              })}
            </nav>
            <nav className="flex sm:hidden w-full flex-1 flex-col gap-4 sm:gap-6 pt-8 sm:pt-20 p-4 sm:p-15">
              {sidebarLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    onClick={closeMenu}
                    className={`relative flex items-center p-2 sm:p-1 rounded-lg sidebar-link ${
                      isActive ? "text-white font-bold" : "text-white"
                    }`}
                  >
                    <div className="text-lg sm:text-xl">{link.label}</div>
                    <div className="link-underline"></div>
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
