const mongoose = require("mongoose");
//const mongooseSlugPlugin = require("mongoose-slug-plugin");
const RecipesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  });

//ReecipestSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipes", RecipesSchema);