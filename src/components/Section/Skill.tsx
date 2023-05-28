import React, { useRef } from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Skill = ({ skill, setCurrentHash, currentHash }: SkillProps) => {
  const skillRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#skill") {
      setCurrentHash("#skill");
    }
  });

  const skillDesigner = skill.find((skill) => skill.category == "designer");
  const skillDeveloper = skill.find((skill) => skill.category == "developer");

  return (
    <section ref={skillRef} className="relative w-full px-24 pt-24 h-screen">
      <div className="flex items-center justify-end mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[170px] leading-[0.75] tracking-[-10px] text-[#999] opacity-[0.08] blur-[5px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          Ability
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <span className="inline-block text-[#FFEE00]">_</span>Skill
        </motion.h2>
      </div>

      <div className="flex text-right mt-12">
        <div className="w-1/2">
          <motion.h5
            className={`${inter.className} text-[20px]`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web App
            Developer
          </motion.h5>
          <div className="flex justify-end flex-wrap pt-3">
            {skillDeveloper?.items.map((skill, idx) => (
              <motion.div
                key={idx}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 * idx,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="relative w-[84px]"
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
              ease: "easeInOut",
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web & Graphic
            Designer
          </motion.h5>
          <div className="flex justify-end pt-3">
            {skillDesigner?.items.map((skill, idx) => (
              <motion.div
                key={idx}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 * idx,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="relative w-[84px]"
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
