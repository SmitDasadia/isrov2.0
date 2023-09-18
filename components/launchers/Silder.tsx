// components/ReusableSlider.tsx
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
type ReusableSliderProps = {
  items: ReactNode[]; // Use ReactNode type for the 'items' prop
};

const ReusableSlider = ({ items }: ReusableSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={``}
      >
        {items[currentIndex]}
      </motion.div>

      <div className="flex justify-center space-x-4 absolute bottom-4 left-0 right-0 pt-5">
        <CgChevronLeft
          className="text-white text-2xl cursor-pointer"
          onClick={prevSlide}
        />

        <CgChevronRight
          className="text-white text-2xl cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default ReusableSlider;
