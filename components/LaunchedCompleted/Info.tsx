import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgChevronLeft } from "react-icons/cg";
interface InfoProps {
  title: string;
  subtitle: string;
  description: any;
  moreInfoLink: string;
  videoLink: string;
}

const Info: FC<InfoProps> = ({
  title,
  description,
  moreInfoLink,
  subtitle,
  videoLink,
}) => {
  return (
    <motion.section className="min-h-screen bg-black text-white">
      <div className="container mx-auto md:px-5 pt-16 flex flex-col items-center">
        <div className="container mx-auto p-10">
          <Link href="/launches">
            <h3 className="text-md pb-10 cursor-pointer flex items-center text-slate-300 hover:text-white">
              <CgChevronLeft className="mr-2" /> Back to Launches
            </h3>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h1>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
            {subtitle}
          </h3>

          <p className="py-2 text-lg text-start">{description}</p>
        </div>
        <div className="pb-10 flex justify-center">
          <Link href={videoLink} target="_">
            <button className="flex justify-center items-center border hover:bg-white hover:text-black py-2 px-8 sm:py-4 sm:px-16 text-lg font-semibold transition duration-300 mr-2 sm:mr-4">
              ReWatch
            </button>
          </Link>
          <Link href={moreInfoLink} target="_">
            <button className="flex justify-center items-center border hover:bg-white hover:text-black  py-2 px-8  sm:py-4 sm:px-16 text-lg font-semibold transition duration-300 mr-1 sm:mr-4">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Info;
