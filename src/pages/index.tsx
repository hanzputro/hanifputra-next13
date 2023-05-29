import Header, { NavigationType } from "@/components/Header";
import Hero from "@/components/Section/Hero";
import Project, { ProjectDetailType } from "@/components/Section/Project";
import Contact, { SocialMediaDetailType } from "@/components/Section/Contact";
import Skill, { SkillType } from "@/components/Section/Skill";
import fsPromises from "fs/promises";
import path from "path";
import { useEffect, useRef, useState } from "react";

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

export default function Home(props: HomeProps) {
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

  console.log("currentHash:", currentHash);
  return (
    <>
      <Header
        navigation={props.navigation}
        sectionRef={sectionRef}
        currentHash={currentHash}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div ref={heroRef}>
          <Hero setCurrentHash={setCurrentHash} currentHash={currentHash} />
        </div>

        <div ref={skillRef}>
          <Skill
            skill={props.skill}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>

        <div className="w-full" ref={projectRef}>
          <Project
            project={props.project}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>

        <div ref={contactRef}>
          <Contact
            socialMedia={props.socialMedia}
            setCurrentHash={setCurrentHash}
            currentHash={currentHash}
          />
        </div>
      </main>
    </>
  );
}

// Fetching data from the JSON file
export async function getStaticProps() {
  const fileNavigation = path.join(process.cwd(), "src/data/navigation.json");
  const jsonNavigationData: HomeProps["navigation"] | any =
    await fsPromises.readFile(fileNavigation);
  const navigationData = JSON.parse(jsonNavigationData);

  const fileProject = path.join(process.cwd(), "src/data/project.json");
  const jsonProjectData: HomeProps["project"] | any = await fsPromises.readFile(
    fileProject
  );
  const projectData = JSON.parse(jsonProjectData);

  const fileSocialMedia = path.join(process.cwd(), "src/data/socialMedia.json");
  const jsonSocialMediaData: HomeProps["project"] | any =
    await fsPromises.readFile(fileSocialMedia);
  const socialMediaData = JSON.parse(jsonSocialMediaData);

  const fileSkill = path.join(process.cwd(), "src/data/skill.json");
  const jsonSkillData: HomeProps["skill"] | any = await fsPromises.readFile(
    fileSkill
  );
  const skillData = JSON.parse(jsonSkillData);

  return {
    props: {
      ...navigationData,
      ...projectData,
      ...socialMediaData,
      ...skillData,
    },
  };
}
