import React, { useRef } from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

export interface SocialMediaDetailType {
  title: string;
  link: string;
  description: string;
  icon: string;
}

interface ContactProps {
  socialMedia: SocialMediaDetailType[];
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Contact = ({
  socialMedia,
  setCurrentHash,
  currentHash,
}: ContactProps) => {
  const contactRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#contact") {
      setCurrentHash("#contact");
    }
  });

  return (
    <section ref={contactRef} className="relative w-full px-24 pt-24 h-screen">
      <div className="flex justify-end items-center mb-12">
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
          CONTACT
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
          <span className="inline-block text-[#FFEE00]">_</span>Get In Touch
        </motion.h2>
      </div>

      <div className="flex justify-between space-x-4 mt-12">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="p-6 w-1/2"
        >
          <p>
            Let&apos;s discuss with me become even greater at what you do. so
            excited to hear from you and let&apos;s start something special
            together.
            <span className="block">feel free to contact me ;)</span>
            <span className="block mt-1">
              <strong>Depok</strong>, <strong>Indonesia</strong>
            </span>
          </p>
          <ul className="flex items-center space-x-5 mt-5">
            {socialMedia?.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.link} target="_blank">
                    <Image
                      className="relative hover:scale-[1.05] duration-100 cursor-pointer"
                      src={`/assets/icons/${item.icon}`}
                      alt={item.description}
                      width={32}
                      height={32}
                      priority
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="w-1/2"
        >
          <iframe
            width="100%"
            height="250"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvup5TyX63Z9LECF2-AgzDe1cIU37sGFg&q=Depok,Jawa+Barat"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
