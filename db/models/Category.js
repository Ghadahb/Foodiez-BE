const mongoose = require("mongoose");
//const mongooseSlugPlugin = require('mongoose-slug-plugin');
const CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
//CategorySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });

module.exports = mongoose.model('Category', CategorySchema);
