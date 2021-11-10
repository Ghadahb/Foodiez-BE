const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const IngredientsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  Image: {
      type: String,
      required: false,
    },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],

  });

IngredientsSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Ingredients", IngredientsSchema);