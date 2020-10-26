// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//content
import tile from "./tile";
import settings from "./settings";
import laatsteOntwikkelingen from "./laatste-ontwikkelingen";

//types
import localeString from "./locale-string";
import localeBlock from "./locale-block";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //content
    tile,
    settings,
    laatsteOntwikkelingen,
    //types
    localeString,
    localeBlock,
  ]),
});
