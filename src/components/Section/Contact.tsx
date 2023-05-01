import React from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import { motion } from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <section className="relative w-full px-24 pt-24 h-screen">
      <div className="flex items-center mb-10">
        <motion.h2
          className={`${andadaPro.className} text-[170px] text-[#111111] leading-[0.75] tracking-[-10px] opacity-[0.018] blur-[2px] ml-[-68px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.018, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
          }}
        >
          CONTACT
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
          }}
        >
          Get In Touch<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Contact;
