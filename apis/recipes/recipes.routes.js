const passport = require('passport');
const express = require('express');
const router = express.Router();
const {
    getRecipes,
} = require('./recipes.controllers');
router.get('/', getRecipes);
module.exports = router;