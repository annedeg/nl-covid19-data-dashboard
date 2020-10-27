// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//content
import tiles from "./documents/tiles";
import siteSettings from "./documents/siteSettings";
import laatsteOntwikkelingen from "./documents/laatste-ontwikkelingen";
import categories from "./documents/category";
import page from "./documents/page";
import post from "./documents/post";

//objects
import localeString from "./locale-string";
import localeBlock from "./locale-block";
import openGraph from "./objects/open-graph";
import mainImage from "./objects/main-image";
import risicoNiveau from "./objects/risico-niveau";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //documents
    tiles,
    siteSettings,
    laatsteOntwikkelingen,
    categories,
    page,
    post,
    //objects
    localeString,
    localeBlock,
    openGraph,
    mainImage,
    risicoNiveau,
  ]),
});
