import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "titleShadow",
      type: "string",
    }),
    // defineField({
    //   name: "project",
    //   type: "array",
    //   of: [defineArrayMember({ type: "collection", to: { type: "project" } })],
    // }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
