const Category = require("../../db/models/Category");
const Recipes = require("../../db/models/Recipes");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().populate({
      path: "recipes",
      select: "name",
    });
    return res.json(categories);
  } catch (error) {
    next(error);
  }
};

// exports.categoryCreate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
//     }
//       req.body.categoryId = req.category._id;
//     const newCategory = await Category.create(req.body);
//     const populated=await newCategory.populate({
//         path:"recipes",
//         select:"name"
//     })
//     return res.status(201).json(newCategory);
//   } catch (error) {
//     next(error);
//   }
// };
exports.categoryCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.recipes = req.params.recipesId;
    const newCategory = await Category.create(req.body);
   await newCategory.populate("recipes");
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

// exports.recipesCreate = async (req, res, next) => {
//   try {
//     console.log("hiiiiii", req.user);
//     if (!req.user._id.equals(req.recipes.owner))
//     // if(req.user._id !==req.recipes.owner)
//     {
//       return next({
//         status: 401, message:"not the owner"
//       })
//     }
//     {
//     if (req.file) {
//       req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
//     }
//     req.body.recipes = req.params.recipesId;
//     const newRecipes = await Recipes.create(req.body);
//     await Recipes.findByIdAndUpdate(req.Recipes,{
//       $push:{Recipes: newRecipes._id}
//     })
//     // const populate = await newRecipes.populate({
//     //   path: "owner",
//     //   select: "username",
//     // });
//     return res.status(201).json(newRecipes);

//     }
//     // else {
//     //   const err = new Error("Unauthorized");
//     //   err.status = 401;
//     //   next(err);
//     // }
//   } catch (error) {
//     next(error);
//   }
// };

exports.recipesCreate = async (req, res, next) => {
  try {
    console.log("hiiiiii", req.user);
    // if (!req.user._id.equals(req.recipes.owner._id)) {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.category = req.params.categoryId;
    req.body.owner=req.user._id
    const newRecipes = await Recipes.create(req.body);
    await newRecipes.populate("category");
    await newRecipes.populate({
      path:"owner",
      select:"username"
    })
    
    return res.status(201).json(newRecipes);

    // }
    // else {
    //   const err = new Error("Unauthorized");
    //   err.status = 401;
    //   next(err);
    // }
  } catch (error) {
    next(error);
  }
};
