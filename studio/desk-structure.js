import S from "@sanity/desk-tool/structure-builder";
import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go";

// hiddenDocTypes will filter out all of the content models
// we expose through other sections in the CMS.
// for example, we will show categories through a custom panel
const hiddenDocTypes = (listItem) =>
  ![
    "route",
    "navigationMenu",
    "post",
    "page",
    "siteSettings",
    "author",
    "category",
    "laatsteOntwikkelingen",
    "tile",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .schemaType("siteSettings")
        .icon(GoSettings)
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.documentListItem()
        .title("Landelijk")
        .schemaType("page")
        .icon(GoHome)
        .child(
          S.document().schemaType("page").documentId("landelijk")
          // .views([S.view.form(), PreviewIFrame()])
        ),

      // Add a visual divider (optional)
      S.divider(),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
