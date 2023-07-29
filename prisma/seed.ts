// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import { navigation } from "../data/navigation";
import { project } from "../data/project";
import { skill } from "../data/skill";
import { socialMedia } from "../data/socialMedia";

const prisma = new PrismaClient();

async function main() {
  await prisma.navigation.createMany({
    data: navigation,
  });

  await prisma.project.createMany({
    data: project,
  });

  await prisma.skill.createMany({
    data: skill,
  });

  await prisma.socialMedia.createMany({
    data: socialMedia,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
