import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Antonio, Inter } from "next/font/google";
import { motion, useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "../MenuToggle";
import { isMobile } from "react-device-detect";

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

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            {
              transform: "scale(1)",
              opacity: 1,
              filter: "blur(0px)",
              visibility: "visible",
            },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            {
              transform: "scale(0.5)",
              opacity: 0,
              filter: "blur(10px)",
              visibility: "hidden",
            },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
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

  const headerVariants = {
    slide: {
      y: [-10, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        times: [0, 1],
        ease: "easeInOut",
        delay: 2.8,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <motion.header
      className="fixed flex justify-between items-center w-full z-[100] h-[60px] md:h-[70px] lg:h-[85px] px-2 lg:px-8 backdrop-blur-md
    before:content-[''] before:absolute before:inset-0 before:w-[100%] before:h-[68px] before:md:h-[78px] before:lg:h-[95px] before:backdrop-blur-md before:blur-sm opacity-0"
      variants={headerVariants}
      animate="slide"
    >
      <div className="relative flex items-center space-x-4 ml-[-7px] lg:ml-0">
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

      <nav ref={scope} className="relative z-10 mr-3 lg:mr-0">
        <div className="block lg:hidden">
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
        <ul
          className={`${inter.className} flex flex-col flex-nowrap lg:flex-row justify-end items-end md:items-center absolute lg:relative right-0 text-right lg:text-center md:w-[100px] lg:w-auto text-[#111111] text-[14px] mt-1 md:mt-3 lg:mt-0`}
        >
          {navigationWithRef?.map((nav: NavigationType, idx: number) => (
            <li
              key={idx}
              className="relative md:w-full md:px-2 mx-1 my-1 lg:my-0 cursor-pointer opacity-0 lg:opacity-100 scale-50 lg:scale-100 blur-[10px] lg:blur-0 invisible lg:visible"
              onClick={() => {
                handleScrollTo(nav.ref);
                setIsOpen(isMobile ? !isOpen : false);
              }}
            >
              <p className="relative whitespace-nowrap z-10 text-[#303030]">
                {nav.label}
              </p>
              {currentHash === nav.hash && (
                <motion.div
                  layoutId="rect"
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute left-0 top-[22px] md:top-0 w-full h-[2px] md:h-[22px] bg-[#fff01f] z-0"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
