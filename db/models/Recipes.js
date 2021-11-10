const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

// REVIEW: A schema is singular, should be RecipeSchema not RecipesSchema
const RecipesSchema = mongoose.Schema({
  image: { String },
  name: {
    type: String,
    required: true,
  },
  description: { String },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

RecipesSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipes", RecipesSchema);
