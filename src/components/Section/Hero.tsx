import React from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="relative flex justify-items-stretch justify-center items-center w-full min-h-screen px-24 pt-24">
      <div className="absolute flex justify-start items-center inset-y-0 left-0 my-auto w-full h-full px-8 pt-[90px]">
        <div className="relative flex items-center justify-center content-center flex-wrap w-full h-full">
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.75] tracking-[-10px] text-[#111111] opacity-[0.02] blur-[2px]`}
          >
            FRONT
          </h1>
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.75] tracking-[-10px] text-[#111111] opacity-[0.02] blur-[2px]`}
          >
            END
          </h1>
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.75] tracking-[-10px] text-[#111111] opacity-[0.02] blur-[2px]`}
          >
            ENGINEER
          </h1>
        </div>
      </div>

      <div className="relative flex-1">
        <h1
          className={`${andadaPro.className} text-[86px] leading-[1.3em] mb-8`}
        >
          <span className="block">
            Bring{" "}
            <span className="inline-block text-white bg-[#44CCFF] px-3">
              Ideas
            </span>
          </span>
          To Life<span className="inline-block text-[#FFEE00]">_</span>
        </h1>

        <p className={`${inter.className} leading-[1.8em]`}>
          Hello, Iam Hanif Putra, a Frontend Engineer. Creating and Combining
          between design, interactive, and code is my passion ;)
        </p>
      </div>

      <div className="relative flex-1 w-[700px] h-[500px] overflow-hidden">
        <iframe
          src="https://my.spline.design/hanifputra-91db9b440c1939db2e258a33d976743d/"
          frameBorder="0"
          width="700"
          height="700"
          style={{ marginLeft: "-50px", marginTop: "-120px" }}
        ></iframe>

        {/* <motion.div
          className="relative"
          animate={{ x: 0, y: -25, z: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Image
            className="relative"
            src="/assets/images/hp-logo.webp"
            alt="Hanif Putra Logo"
            width={320}
            height={320}
            priority
          />
        </motion.div> */}
      </div>
      {/* <div
        className="relative flex flex-col items-center justify-between"
        // before:absolute before:h-[150px] before:w-[150px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']
        // after:absolute after:m-auto after:inset-0 after:top-[250px] after:left-[30px] after:-z-20 after:h-[70px] after:w-[100px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
        // before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700/10 after:dark:from-sky-900 after:dark:via-[#ffffff]/40 before:lg:h-[300px]"
      ></div> */}
    </section>
  );
};

export default Hero;
