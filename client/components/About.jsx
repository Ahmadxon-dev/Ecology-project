"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.1, delay: 0 }}
      className="h-screen container  mx-auto flex items-center justify-between  p-4"
    >
      <h1 className="text-6xl leading-11  font-bold z-10 ">
        <span className="text-green-700 text-7xl capitalize">
          Birgalikda <br />
        </span>
        yaxshiroq Toshkent sari
      </h1>
      <div className="left-side relative ">
        <Image
          src="/ecology.jpg"
          alt="not"
          width={700}
          height={200}
          style={{ height: "500px" }}
          priority={true}
          //   className="w-full "
        />
      </div>
    </motion.div>
  );
};
