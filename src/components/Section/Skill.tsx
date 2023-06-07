import React, { useRef } from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";
import { motion, useScroll, useMotionValueEvent, stagger } from "framer-motion";

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

  const skillVariants = {
    initial: { y: 30, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.8,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={skillRef} className="relative w-full px-24 pt-24 h-screen">
      <div className="flex items-center justify-end mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[170px] leading-[0.75] tracking-[-10px] text-[#e2e2e2] opacity-[0] blur-[1px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 0.62, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          ABILITY
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web & Graphic
            Designer
          </motion.h5>
          <motion.div
            className="flex justify-end pt-3"
            variants={skillVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skillDesigner?.items.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={{
                  ...skillVariants,
                  whileInView: {
                    ...skillVariants.whileInView,
                    transition: {
                      ...skillVariants.whileInView.transition,
                    },
                  },
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
          </motion.div>
        </div>

        <div className="w-1/2">
          <motion.h5
            className={`${inter.className} text-[20px]`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> Web App
            Developer
          </motion.h5>
          <motion.div
            className="flex justify-end flex-wrap pt-3"
            variants={{
              ...skillVariants,
              whileInView: {
                ...skillVariants.whileInView,
                transition: {
                  ...skillVariants.whileInView.transition,
                  delay: 1,
                },
              },
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skillDeveloper?.items.map((skill, idx) => (
              <motion.div key={idx} variants={skillVariants}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
