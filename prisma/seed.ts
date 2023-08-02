// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import { navigation } from "../data/navigation";
import { project } from "../data/project";
import { skill } from "../data/skill";
import { socialMedia } from "../data/socialMedia";

const prisma = new PrismaClient();

async function main() {
  await prisma.tag.createMany({
    data: [
      { name: "Designer" },
      { name: "Frontend Developer" },
      { name: "Fullstack Developer" },
    ],
  });

  await prisma.project.create({
    data: {
      title: "RRQ Mabar App 1",
      description: "web app for collecting esport tournament from RRQ",
      image: "rrq-mabar.jpg",
      imageBlur: "LuLgR:?^t7MxInRPoeozSgnjj[W;",
      thumbnail: "rrq-mabar.jpg",
      thumbnailBlur: "L7A0UK;c0M75s:ayWVbH00F#~B:~",
      width: 1050,
      height: 1623,
      thumbWidth: 400,
      thumbHeight: 400,
      tags: [], //{ connect: [{ id: 0 }, { id: 1 }] },
    },
  });

  // await prisma.skill.createMany({
  //   data: skill,
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
