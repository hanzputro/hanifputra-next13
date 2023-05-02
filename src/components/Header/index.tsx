import React from "react";
import Image from "next/image";
import { Antonio, Inter } from "next/font/google";
import { motion } from "framer-motion";

const antonio = Antonio({
  weight: ["100"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <motion.header
      className="fixed flex justify-between items-center w-full z-10 h-[85px] px-8 backdrop-blur-sm bg-white/30 
    before:content-[''] before:absolute before:inset-0 before:w-[100%] before:h-[95px] before:backdrop-blur-sm before:blur-sm"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.6,
      }}
    >
      <div className="relative flex items-center space-x-4">
        <a
          className="relative flex items-center
          before:content-[''] before:absolute before:inset-0 before:w-[1px] before:h-[70%] before:my-auto before:left-[68px] before:bg-[#FFEE00]"
          href=""
        >
          <Image
            src="/assets/icons/hanifputra.webp"
            alt="Hanif Putra Logo"
            width={70}
            height={70}
            priority
          />
          <p
            className={`${antonio.className} bg-[#f9f970] text-white text-[16px] leading-[1.1em] tracking-[2px] p-[3px] ml-[10px]`}
          >
            <span className="block">HANIF</span> PUTRA
          </p>
        </a>
      </div>

      <ul
        className={`${inter.className} relative flex items-center space-x-4 text-[#111111] text-[14px]`}
      >
        <li>
          <a href="#work">Me</a>
        </li>
        <li>
          <a href="#work">Works</a>
        </li>
        <li>
          <a href="#get-in-touch">Get In Touch</a>
        </li>
      </ul>
    </motion.header>
  );
};

export default Header;
