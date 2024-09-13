import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Tooltip } from "@/components/Tooltip";
import Image from "next/image";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const MEDIA_URL = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

interface SkillListType {
  title: string;
  list: [];
}

interface skillDetailType {
  attributes: {
    title: string;
    image: {
      data: {
        attributes: {
          title: string;
          url: string;
          height: number;
          width: number;
        };
      };
    };
  };
}

const SkillList = ({ title, list }: SkillListType) => {
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
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <motion.h5
        className={`${inter.className} text-[18px] md:text-[20px] font-semibold`}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <span className="inline-block text-[#FFEE00]">•</span>{" "}
        {title?.toUpperCase()}
      </motion.h5>
      <motion.div
        className="flex justify-end flex-row flex-wrap md:pt-3"
        variants={skillVariants}
        initial="initial"
        whileInView={list ? "whileInView" : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {list?.map((skill: skillDetailType, idx) => (
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
            <Tooltip text={skill?.attributes?.title}>
              <Image
                className="relative w-[64px] md:w-[84px]"
                src={`${MEDIA_URL}${skill?.attributes?.image?.data?.attributes?.url}`}
                alt={skill?.attributes?.title}
                width={skill?.attributes?.image?.data?.attributes?.width}
                height={skill?.attributes?.image?.data?.attributes?.height}
                priority
              />
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillList;
