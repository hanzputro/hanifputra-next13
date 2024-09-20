import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const collectionType = defineType({
  name: "collection",
  title: "Collections",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "skill",
      type: "tags",
      options: {
        predefinedTags: [
          { label: "Design", value: "design" },
          { label: "Code", value: "code" },
        ],
      },
    }),
    defineField({
      name: "job",
      type: "tags",
      options: {
        predefinedTags: [
          { label: "Frontend Developer", value: "frontend-developer" },
          { label: "Fullstack Developer", value: "fullstack-developer" },
          { label: "Designer", value: "designer" },
        ],
      },
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
