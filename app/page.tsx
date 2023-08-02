"use client";
import Header, { NavigationType } from "@/components/Header";
import Hero from "@/components/Section/Hero";
import Project, { ProjectDetailType } from "@/components/Section/Project";
import Contact, { SocialMediaDetailType } from "@/components/Section/Contact";
import Skill, { SkillType } from "@/components/Section/Skill";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { skill } from "@/data/skill";
import { project } from "@/data/project";
import { socialMedia } from "@/data/socialMedia";

interface HomeProps {
  navigation: NavigationType[];
  project: ProjectDetailType[];
  socialMedia: SocialMediaDetailType[];
  skill: SkillType[];
}

export interface SectionRefProps {
  heroRef: any;
  skillRef: any;
  projectRef: any;
  contactRef: any;
}

export default function Home() {
  const [currentHash, setCurrentHash] = useState("");
  const [sectionRef, setSectionRef] = useState<SectionRefProps>();
  const heroRef = useRef<any>(null);
  const skillRef = useRef<any>(null);
  const projectRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  useEffect(() => {
    setSectionRef({
      heroRef: heroRef,
      skillRef: skillRef,
      projectRef: projectRef,
      contactRef: contactRef,
    });
  }, []);

  return (
    <>
      <Header
        navigation={navigation}
        sectionRef={sectionRef}
        currentHash={currentHash}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full overflow-hidden" ref={heroRef}>
          <Hero setCurrentHash={setCurrentHash} currentHash={currentHash} />
        </div>

        <div className="w-full overflow-hidden" ref={skillRef}>
          <Skill
            skill={skill}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>

        <div className="w-full overflow-hidden" ref={projectRef}>
          <Project
            project={project}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>

        <div className="w-full overflow-hidden" ref={contactRef}>
          <Contact
            socialMedia={socialMedia}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>
      </main>
    </>
  );
}
