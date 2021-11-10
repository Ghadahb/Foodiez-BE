const Recipes = require("../../db/models/Recipes")
const Ingredients = require("../../db/models/Ingredients");


exports.getRecipes = async (req, res, next ) => {
    try {
    const recipes = await Recipes.find()
    const populate = await recipes;
  
    return res.json(recipes);
    } catch (error){
        return res.status(500).json({message: error.message})
    }
};

exports.ingredientsCreate = async (req, res, next) => {
    try {
      console.log("hiiiiii", req.user);
      // if (!req.user._id.equals(req.recipes.owner._id)) {
      if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      }
      req.body.recipe = req.params.recipeId;
      req.body.owner=req.user._id
      const newIngredients = await Ingredients.create(req.body);
      await newIngredients.populate("Recipe");
     
      
      return res.status(201).json(newIngredients);
  
      // }
      // else {
      //   const err = new Error("Unauthorized");
      //   err.status = 401;
      //   next(err);
      // }
      } catch (error) {
      next(error);
    }
  }