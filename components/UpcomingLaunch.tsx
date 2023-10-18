import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface UpcomingLaunchProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  hours: number;
  minutes: number;
  seconds: number;
}

const UpcomingLaunch: FC<UpcomingLaunchProps> = ({
  backgroundImageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
  hours,
  minutes,
  seconds,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timer);
      } else if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

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

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

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
          <h2 className="text-lg sm:text-xl md:text-2xl text-white pb-2">
            {title} in {formatTime(timeLeft.hours)}:
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
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
