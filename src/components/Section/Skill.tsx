import React from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";
import { motion } from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

interface SkillDetailType {
  title: string;
  image: string;
  imageBlur: string;
  height: number;
  width: number;
}

export interface SkillType {
  category: string;
  items: SkillDetailType[];
}

interface SkillProps {
  skill: SkillType[];
}

const Skill = ({ skill }: SkillProps) => {
  const skillDesigner = skill.find((skill) => skill.category == "designer");
  const skillDeveloper = skill.find((skill) => skill.category == "developer");

  return (
    <section className="relative w-full px-24 pt-24 h-screen">
      <div className="flex items-center mb-10">
        <motion.h2
          className={`${andadaPro.className} text-[170px] text-[#111111] leading-[0.75] tracking-[-10px] opacity-[0.02] blur-[5px] ml-[-68px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 0.018, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
        >
          SKILLS
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
        >
          Ability<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h2>
      </div>

      <div className="flex w-[80%] mt-[50px]">
        <div className="w-1/2">
          <motion.h5
            className={`${inter.className} text-[20px]`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web & Graphic
            Designer
          </motion.h5>
          <div className="flex items-center pt-3">
            {skillDesigner?.items.map((skill, idx) => (
              <motion.div
                key={idx}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 * idx,
                  duration: 0.6,
                  ease: "easeIn",
                }}
              >
                <Image
                  className="relative opacity-90 hover:opacity-[100] duration-100 w-[84px]"
                  src={`/assets/images/skill/${skill.image}`}
                  alt={skill.title}
                  width={skill.width}
                  height={skill.height}
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <motion.h5
            className={`${inter.className} text-[20px]`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web App
            Developer
          </motion.h5>
          <div className="flex items-center flex-wrap pt-3">
            {skillDeveloper?.items.map((skill, idx) => (
              <motion.div
                key={idx}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 * idx,
                  duration: 0.6,
                  ease: "easeIn",
                }}
              >
                <Image
                  className="relative opacity-90 hover:opacity-[100] duration-100 w-[84px]"
                  src={`/assets/images/skill/${skill.image}`}
                  alt={skill.title}
                  width={skill.width}
                  height={skill.height}
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
