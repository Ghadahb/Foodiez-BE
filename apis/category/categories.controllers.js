const Category = require("../../db/models/Category")

exports.getCategories = async (req, res, next ) => {
    try {
    const categories = await Category.find();
    return res.json(categories);
    } catch (error){
        return res.status(500).json({message: error.message})
    }
};

exports.categoryCreate = async (req, res , next ) => {
    try {
        req.body.owner=req.user._id
        const newCategory = await Category.create(req.body);
        return  res.status(201).json(newCategory);
    } catch (error){
        return res.status(500).json({message: error.message})
    }
}; 