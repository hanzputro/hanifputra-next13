import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
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
    //   name: "design",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "collection",
    //       to: { type: "skill", label: "design" },
    //     }),
    //   ],
    // }),
    // defineField({
    //   name: "code",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "collection",
    //       to: { type: "skill", label: "code" },
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
