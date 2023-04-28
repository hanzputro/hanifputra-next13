import React from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const Project = () => {
  return (
    <section>
      <div>
        <h2 className={`${andadaPro.className} text-[86px]`}>PROJECT</h2>
        <h2 className={`${andadaPro.className} text-[50px]`}>
          WORKS<span className="inline-block text-[#FFEE00]">_</span>
        </h2>
      </div>
      <div></div>
    </section>
  );
};

export default Project;
