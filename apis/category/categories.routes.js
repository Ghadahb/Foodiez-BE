const passport = require('passport');
const express = require('express');
const router = express.Router();
const {
    recipesCreate,
    categoryCreate,
    getCategories,
} = require('./categories.controllers');
router.get('/', getCategories);
router.post('/',passport.authenticate("jwt", { session: false }),categoryCreate);
router.post(
    "/:categoryId/recipes",
    passport.authenticate("jwt", { session: false }),
    recipesCreate
  );
module.exports = router;
