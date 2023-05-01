import Header from "@/components/Header";
import Hero from "@/components/Section/Hero";
import Project, { ProjectDetailType } from "@/components/Section/Project";
import fsPromises from "fs/promises";
import path from "path";

interface HomeProps {
  project: ProjectDetailType[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Project project={props.project} />
      </main>
    </>
  );
}

// Fetching data from the JSON file
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/project.json");
  const jsonData: HomeProps["project"] | any = await fsPromises.readFile(
    filePath
  );
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
