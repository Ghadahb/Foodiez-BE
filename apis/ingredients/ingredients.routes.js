const passport = require('passport');
const express = require('express');
const router = express.Router();
const {
    getIngredients,
} = require('./ingredients.controllers');



router.get('/ingredients', getIngredients);
module.exports = router;