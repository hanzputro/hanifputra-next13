import React, { useRef } from "react";
import { Andada_Pro } from "next/font/google";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import SkillList from "../SkillList";

const andadaPro = Andada_Pro({
  weight: ["600"],
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

const GET_SKILL = gql`
  query Query {
    homePage {
      data {
        attributes {
          Skill {
            title
            titleShadow
            category1
            category2
            design {
              data {
                attributes {
                  title
                  category
                  image {
                    data {
                      attributes {
                        name
                        url
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
            code {
              data {
                attributes {
                  title
                  category
                  image {
                    data {
                      attributes {
                        name
                        url
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Skill = ({ setCurrentHash, currentHash }: SkillProps) => {
  const skillRef = useRef<any>(null);

  const { data } = useQuery(GET_SKILL);

  const skillData = data?.homePage?.data?.attributes?.Skill;

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#skill") {
      setCurrentHash("#skill");
    }
  });

  const titleVariants = {
    initial: { x: 70, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const titleShadowVariants = {
    initial: { x: -150, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 0.62,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={skillRef}
      className="relative w-full px-5 md:px-12 lg:px-24 pt-14 md:pt-24 pb-3 md:pb-0 min-h-screen"
    >
      <div className="flex items-center justify-end mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[80px] md:text-[140px] lg:text-[160px] leading-[0.9] md:leading-[0.8] tracking-[-8px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-[0] blur-[1px]`}
          variants={titleShadowVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {skillData?.titleShadow}
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[40px] md:text-[50px] absolute`}
          variants={titleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#FFEE00]">_</span>
          {skillData?.title}
        </motion.h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap text-right md:mt-12 md:space-x-4">
        <SkillList
          title={skillData?.category1}
          list={skillData?.design?.data}
        />
        <SkillList title={skillData?.category2} list={skillData?.code?.data} />
      </div>
    </section>
  );
};

export default Skill;
