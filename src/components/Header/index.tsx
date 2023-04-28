import React from "react";
import Image from "next/image";
import { Antonio, Inter } from "next/font/google";

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
    <header className="fixed flex justify-between items-center w-full z-10 h-[90px] px-8">
      <li className="flex items-center space-x-4">
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
            className={`${antonio.className} bg-[#f9f970] text-white text-[18px] leading-[1.1em] tracking-[2px] p-[2px] ml-[10px]`}
          >
            <span className="block">HANIF</span> PUTRA
          </p>
        </a>
      </li>

      <li
        className={`${inter.className} flex items-center space-x-4 text-[#111111] text-[14px]`}
      >
        <a href="#work">Work</a>
        <a href="#get-in-touch">
          <p>Get In Touch</p>
        </a>
      </li>
    </header>
  );
};

export default Header;
