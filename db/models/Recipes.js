const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipesSchema = mongoose.Schema({

    name: {
      type: String,
      required: true,
    },
    image: { type: String},
    calories: {
      type: Number,
      default: 200,
    },
    description: { 
      type: String,
    },

    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },

    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  });

RecipesSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipe", RecipesSchema);