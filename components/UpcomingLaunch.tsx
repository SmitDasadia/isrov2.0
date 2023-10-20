import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface UpcomingLaunchProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  launchDateTime: Date;
}

const UpcomingLaunch: FC<UpcomingLaunchProps> = ({
  backgroundImageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
  launchDateTime,
}) => {
  // Function to calculate the time left
  function calculateTimeLeft(launchTime: Date) {
    const now = new Date();
    const timeDiff = launchTime.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(launchDateTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(launchDateTime));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [launchDateTime]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const sectionStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Function to format time left
  function formatTimeLeft(time: { days: number; hours: number; minutes: number; seconds: number }) {
    const parts = [];
    if (time.days > 0) {
      parts.push(`${time.days} day${time.days > 1 ? 's' : ''}`);
    }
    if (time.hours > 0) {
      parts.push(`${time.hours} hour${time.hours > 1 ? 's' : ''}`);
    }
    if (time.minutes > 0) {
      parts.push(`${time.minutes} minute${time.minutes > 1 ? 's' : ''}`);
    }
    if (time.seconds > 0) {
      parts.push(`${time.seconds} second${time.seconds > 1 ? 's' : ''}`);
    }

    return parts.join(' : ');
  }

  return (
    <motion.section
      className="relative h-screen flex bg-center bg-cover"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <motion.div
        className="container mx-auto flex flex-col justify-end h-full relative z-10 pb-10"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <div className="mb-8 ml-8">
          <h2 className="text-sm sm:text-xl md:text-2xl text-white pb-2">
            {title} in {formatTimeLeft(timeLeft)}
          </h2>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">
            {subtitle}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="self-start ml-8 mb-16 border hover:bg-white hover:text-black text-white py-4 px-16 text-lg font-semibold transition duration-300">
            {buttonText}
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default UpcomingLaunch;
