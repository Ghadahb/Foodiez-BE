const Recipes = require("../../db/models/Recipes");

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipes.find();
    // REVIEW: This line is incorrect. To populate you say find().populate()
    const populate = await recipes;

    return res.json(recipes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
