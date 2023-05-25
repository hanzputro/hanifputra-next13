import Header from "@/components/Header";
import Hero from "@/components/Section/Hero";
import Project, { ProjectDetailType } from "@/components/Section/Project";
import Contact, { SocialMediaDetailType } from "@/components/Section/Contact";
import Skill, { SkillType } from "@/components/Section/Skill";
import fsPromises from "fs/promises";
import path from "path";

interface HomeProps {
  project: ProjectDetailType[];
  socialMedia: SocialMediaDetailType[];
  skill: SkillType[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Skill skill={props.skill} />
        <Project project={props.project} />
        <Contact socialMedia={props.socialMedia} />
      </main>
    </>
  );
}

// Fetching data from the JSON file
export async function getStaticProps() {
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
      ...projectData,
      ...socialMediaData,
      ...skillData,
    },
  };
}
