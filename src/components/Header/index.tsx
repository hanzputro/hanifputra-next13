import React, { useEffect, useState } from "react";
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

export interface NavigationType {
  label: string;
  hash: string;
  ref: any;
}

interface NavigationProps {
  navigation: NavigationType[];
  sectionRef: any;
  currentHash: string;
}

const Header = ({ navigation, sectionRef, currentHash }: NavigationProps) => {
  const [navigationWithRef, setNavigationWithRef] = useState<any>();

  useEffect(() => {
    const handleNavigationWithRef = navigation.map((items) => {
      const addRef = () => {
        switch (items.hash) {
          case "#skill":
            return sectionRef?.skillRef;
          case "#project":
            return sectionRef?.projectRef;
          case "#contact":
            return sectionRef?.contactRef;
          default:
            return sectionRef?.heroRef;
        }
      };
      return {
        ...items,
        ref: addRef(),
      };
    });

    setNavigationWithRef(handleNavigationWithRef);
  }, [sectionRef]);

  const handleScrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  return (
    <motion.header
      className="fixed flex justify-between items-center w-full z-[100] h-[85px] px-8 backdrop-blur-md
    before:content-[''] before:absolute before:inset-0 before:w-[100%] before:h-[95px] before:backdrop-blur-md before:blur-sm"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 2.8,
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
            className={`${antonio.className} bg-[#fff01f] text-white text-[16px] leading-[1.1em] tracking-[2px] p-[3px] ml-[10px]`}
          >
            <span className="block">HANIF</span> PUTRA
          </p>
        </a>
      </div>

      <ul
        className={`${inter.className} relative flex items-center text-[#111111] text-[14px]`}
      >
        {navigationWithRef?.map((nav: NavigationType, idx: number) => (
          <li
            key={idx}
            className="relative px-2 mx-1 cursor-pointer"
            onClick={() => handleScrollTo(nav.ref)}
          >
            <p
              className="relative z-10"
              style={{ color: currentHash == nav.hash ? "white" : "#303030" }}
            >
              {nav.label}
            </p>
            {currentHash === nav.hash && (
              <motion.div
                layoutId="rect"
                transition={{ duration: 0.4, type: "spring" }}
                className="absolute left-0 top-0 w-full h-[22px] bg-[#fff01f] z-0"
              />
            )}
          </li>
        ))}
      </ul>
    </motion.header>
  );
};

export default Header;
