"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/photo2.png"
            priority
            quality={100}
            alt="photo"
            fill
            className="object-contain rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
