const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');


const CategorySchema = new mongoose.Schema({

    name: {
      type: String,
      required: true,
    },
    // slug: String,
    image: { type: String },

    recipe: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
CategorySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });

module.exports = mongoose.model('Category', CategorySchema);
