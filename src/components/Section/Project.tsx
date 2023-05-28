import React, { useState, useRef } from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

export interface ProjectDetailType {
  title: string;
  tags: [];
  description: string;
  image: string;
  imageBlur: string;
  thumbnail: string;
  thumbnailBlur: string;
  width: number;
  height: number;
}

export interface ImageListCustomType {
  blur: string;
}

interface ProjectProps {
  project: ProjectDetailType[];
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Project = ({ project, setCurrentHash, currentHash }: ProjectProps) => {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [detailSelected, setDetailSelected] = useState(0);

  const handleShowDetail = (id: number) => {
    setDetailVisible(!isDetailVisible);
    setDetailSelected(id);
  };

  const handleGalleryAspectRatio = (height: number) => {
    if (height == 200) return "4 / 2";
    if (height == 400) return "1";
    return "2 / 3";
  };

  const projectRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#project") {
      setCurrentHash("#project");
    }
  });

  return (
    <section
      ref={projectRef}
      className="relative w-full px-24 pt-24 min-h-screen"
    >
      <div className="flex items-center mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[170px] leading-[0.75] tracking-[-10px] text-[#999] opacity-[0.08] blur-[5px] ml-[-10px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          WORKS
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
          Project<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h2>
      </div>

      <div className="relative mt-12 pb-20">
        <motion.div className="relative xs:columns-1 sm:columns-3 lg:columns-4 gap-3">
          {project?.map((item, idx) => {
            return (
              <AnimatePresence key={item.title}>
                {isDetailVisible && (
                  <motion.div
                    key={detailSelected}
                    className="absolute w-full h-full inset-0 m-auto z-10 duration-200"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: detailSelected == idx ? 1 : 0,
                      scale: detailSelected == idx ? 1 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 text-3xl cursor-pointer px-5 py-7 leading-[0px]"
                      onClick={() => handleShowDetail(idx)}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.4,
                        },
                      }}
                    >
                      x
                    </motion.div>
                    <motion.div
                      className="w-full h-full object-contain"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3,
                      }}
                    >
                      <motion.div
                        className="absolute mb-5"
                        initial={{
                          opacity: 0,
                          y: -15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <h2
                          className={`${andadaPro.className} text-[30px] text-[#1f1f1f] mb-2`}
                        >
                          {item.title}
                        </h2>
                        {item.tags.map((tag: { name: string }, idx) => (
                          <span
                            key={idx}
                            className="text-[12px] bg-[#eee] py-1 px-2 mr-2 rounded-md"
                          >
                            {tag.name}
                          </span>
                        ))}
                        <p className="text-lg mt-1">{item.description}</p>
                      </motion.div>
                      <Image
                        className="w-full h-full object-contain"
                        ref={projectRef}
                        id={`thumb-${idx}`}
                        src={`/assets/images/project/${item.image}`}
                        blurDataURL={item.imageBlur}
                        alt={item.title}
                        placeholder="blur"
                        width={item.width}
                        height={item.height}
                        priority
                      />
                    </motion.div>
                  </motion.div>
                )}

                <motion.div
                  key={idx}
                  className="mb-3"
                  style={{
                    aspectRatio: handleGalleryAspectRatio(item.height),
                  }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  onClick={() => handleShowDetail(idx)}
                >
                  <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: isDetailVisible ? 0 : 1,
                    }}
                    exit={{ opacity: 1 }}
                  >
                    <Image
                      className="w-full h-full object-contain"
                      ref={projectRef}
                      id={`thumb-${idx}`}
                      src={`/assets/images/project/thumb/${item.thumbnail}`}
                      blurDataURL={item.thumbnailBlur}
                      alt={item.title}
                      placeholder="blur"
                      width={item.width}
                      height={item.height}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
