import React, { useState, useEffect } from "react";
import { Andada_Pro, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  const [seconds, setSeconds] = useState(0);
  const wordArrays = [
    { name: "Design", color: "#ff446f" },
    { name: "Codes", color: "#009B77" },
    { name: "Ideas", color: "#44CCFF" },
  ];
  const [quote, setQuote] = useState(wordArrays[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(0);
        setQuote(wordArrays[seconds]);
      } else {
        setSeconds((seconds: number) => seconds + 1);
        setQuote(wordArrays[seconds]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <section className="relative flex justify-items-stretch justify-center items-center w-full min-h-screen px-24 pt-24">
      <div className="absolute flex justify-start items-center inset-y-0 left-0 my-auto w-full h-full px-8 pt-[90px]">
        <div className="relative flex items-center justify-center content-center flex-wrap w-full h-full">
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.8] tracking-[-10px] text-[#111111] opacity-[0.018] blur-[2px]`}
          >
            FRONT
          </h1>
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.8] tracking-[-10px] text-[#111111] opacity-[0.018] blur-[2px]`}
          >
            END
          </h1>
          <h1
            className={`${andadaPro.className} text-[170px] block w-full leading-[0.8] tracking-[-10px] text-[#111111] opacity-[0.018] blur-[2px]`}
          >
            ENGINEER
          </h1>
        </div>
      </div>

      <div className="relative flex-1">
        <motion.h1
          className={`${andadaPro.className} text-[86px] leading-[1.3em] mb-8`}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <span className="block">
            Bring
            <AnimatePresence>
              <motion.span
                key={seconds}
                className="absolute inline-block text-white px-3"
                initial={{ y: 10, x: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1, background: quote.color }}
                exit={{ y: -10, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                {quote.name}
              </motion.span>
            </AnimatePresence>
          </span>
          To Life<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h1>

        <motion.p
          className={`${inter.className} leading-[1.8em]`}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          Hello, Iam Hanif Putra, a Frontend Engineer. Creating and Combining
          between design, interactive, and code is my passion ;)
        </motion.p>
      </div>

      <div className="relative flex-1 w-[700px] h-[500px] overflow-hidden cursor-pointer">
        <iframe
          src="https://my.spline.design/hanifputra-91db9b440c1939db2e258a33d976743d/"
          frameBorder="0"
          width="700"
          height="700"
          style={{
            marginLeft: "-50px",
            marginTop: "-120px",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
