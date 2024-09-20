import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact",
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
    defineField({
      name: "description",
      type: "blockContent",
    }),
    // defineField({
    //   name: "socialMedia",
    //   type: "array",
    //   of: [
    //     defineArrayMember({ type: "collection", to: { type: "socialMedia" } }),
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
