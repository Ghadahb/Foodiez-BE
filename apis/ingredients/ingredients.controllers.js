const Ingredients = require("../../db/models/Ingredients");


exports.getIngredients = async (req, res, next ) => {
    try {
    const ingredients = await Ingredients.find()
    const populate = await ingredients;
  
    return res.json(ingredients);
    } catch (error){
        return res.status(500).json({message: error.message})
    }
};

