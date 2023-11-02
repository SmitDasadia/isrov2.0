import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          className="w-full h-full"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-80%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={`${slides[currentSlide].image}`}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute bottom-0 left-0 p-8 bg-opacity-50 pb-10">
            <motion.h2
              className="text-white text-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              className="text-white text-md font-semibold pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2  transform -translate-y-1/2 p-2  bg-opacity-50  hover:bg-opacity-75"
      >
        <CgChevronLeft size={50} className="text-white font-bold" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2  bg-opacity-50  hover:bg-opacity-75"
      >
        <CgChevronRight size={50} className="text-white font-bold" />
      </button>
    </div>
  );
};

export default ImageSlider;
