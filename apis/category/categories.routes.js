const passport = require('passport');
const express = require('express');
const router = express.Router();
const {
    categoryCreate,
    getCategories,
} = require('./categories.controllers');
router.get('/', getCategories);
router.post('/',passport.authenticate("jwt", { session: false }),categoryCreate);
module.exports = router;

