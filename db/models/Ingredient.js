const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const IngredientsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  });

ReecipestSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Ingredients", IngredientsSchema);