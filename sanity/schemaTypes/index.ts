import { type SchemaTypeDefinition } from "sanity";

import { seoType } from "./seoType";
import { collectionType } from "./collectionType";
import { homeType } from "./homeType";
import { skillType } from "./skillType";
import { projectType } from "./projectType";
import { contactType } from "./contactType";
// import { categoryType } from "./categoryType";
// import { postType } from "./postType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { sloganType } from "./sloganType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    collectionType,
    homeType,
    skillType,
    projectType,
    contactType,
    // categoryType,
    // postType,
    authorType,
    blockContentType,
    sloganType,
  ],
};
