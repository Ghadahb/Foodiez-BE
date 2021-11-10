const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

// REVIEW: A schema is singular, should be IngredientSchema not IngredientsSchema
const IngredientsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // REVIEW: Ingredient doesn't need an owner
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// REVIEW: This will crash your code, it's IngredientsSchema
ReecipestSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Ingredients", IngredientsSchema);
