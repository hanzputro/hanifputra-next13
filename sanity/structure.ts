import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.listItem()
        .id("seo")
        .schemaType("SEO")
        .title("SEO")
        .child(S.editor().id("seo").schemaType("SEO").documentId("seo")),
      S.documentTypeListItem("collection").title("Collections"),
      S.listItem()
        .title("Homepage")
        .child(
          S.list()
            .title("Section")
            .items([
              S.listItem()
                .id("home")
                .schemaType("home")
                .title("Home")
                .child(
                  S.editor().id("home").schemaType("home").documentId("home")
                ),
              S.listItem()
                .id("skill")
                .schemaType("skill")
                .title("Skill")
                .child(
                  S.editor().id("skill").schemaType("skill").documentId("skill")
                ),
              S.listItem()
                .id("project")
                .schemaType("project")
                .title("Project")
                .child(
                  S.editor()
                    .id("project")
                    .schemaType("project")
                    .documentId("project")
                ),
              S.listItem()
                .id("contact")
                .schemaType("contact")
                .title("Contact")
                .child(
                  S.editor()
                    .id("contact")
                    .schemaType("contact")
                    .documentId("contact")
                ),
            ])
        ),
      S.divider(),
      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
