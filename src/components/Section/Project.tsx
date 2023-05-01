import React from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

export interface ProjectDetailType {
  title: String;
  tags: [];
  description: String;
  image: String;
  thumbnail: String;
}

interface ProjectProps {
  project: ProjectDetailType[];
}

const Project = ({ project }: ProjectProps) => {
  return (
    <section className="relative w-full px-24 pt-24">
      <div className="flex items-center mb-10">
        <h2
          className={`${andadaPro.className} text-[170px] text-[#111111] leading-[0.75] tracking-[-10px] opacity-[0.018] blur-[2px] ml-[-68px]`}
        >
          PROJECT
        </h2>
        <h2 className={`${andadaPro.className} text-[50px] absolute`}>
          Works<span className="inline-block text-[#FFEE00]">_</span>
        </h2>
      </div>
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {project?.map((item) => {
              return (
                <Image
                  className="relative"
                  src={`/assets/images/project/thumb/${item.image}`}
                  alt="anjar tanjung"
                  width={400}
                  height={200}
                  priority
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Project;
