const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: { String },

    slug: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],
    // REVIEW: You don't need an owner for the user
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Category", CategorySchema);
