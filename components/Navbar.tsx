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
      <header className="p-2 sm:p-3 md:p-2">
        <div className="container mx-auto flex items-center justify-center sm:justify-between">
          <Link href="/">
            <div className="flex items-center p-3 sm:p-2">
              <img src="/isrologo.png" className="sm:w-36" alt="logo" />
            </div>
          </Link>
          <div className="hidden sm:flex sm:flex-grow sm:justify-center sm:mr-9">
            {sidebarLinks.slice(0, 6).map((link) => (
              <Link href={link.route} key={link.label}>
                <div className="text-white px-5 sm:px-3 md:px-3 lg:px-5 font-semibold sidebar-link relative">
                  <div className="text-md sm:text-lg transform scale-100 hover:scale-110">
                    {link.label}
                    <div className="link-underline"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleSidebar}
            className="absolute top-9 right-7  sm:top-auto sm:right-7 "
          >
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
            className={`flex-col justify-between gap-12 h-screen overflow-auto sidebar fixed top-0 right-0 bg-black text-white p-4 sm:p-10 transform-all transition-width duration-100 z-50 w-2/3 sm:w-2/3 lg:w-1/3 xl:w-1/4 `}
          >
            <span
              onClick={toggleSidebar}
              className="absolute top-6 right-6 cursor-pointer text-xl sm:text-2xl text-white"
            >
              <CgClose size={28} className="text-white" />
            </span>
            <nav className="hidden sm:flex w-full flex-1 flex-col gap-2 sm:gap-4 pt-8 sm:pt-20 p-4 sm:p-15">
              {sidebarLinks.slice(6).map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    onClick={closeMenu}
                    className={`relative flex items-center p-2 sm:p-1 rounded-lg text-white font-semibold hover:text-gray-800`}
                  >
                    <div className="text-md sm:text-lg">{link.label}</div>
                  </Link>
                );
              })}
            </nav>

            <nav className="flex sm:hidden w-full flex-1 flex-col gap-4 pt-8 sm:pt-20 p-4 sm:p-15">
              {sidebarLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    onClick={closeMenu}
                    className={`relative flex items-center p-2 sm:p-1 rounded-lg  text-white font-semibold hover:text-gray-800`}
                  >
                    <div className="text-md sm:text-lg">{link.label}</div>
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
