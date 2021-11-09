const passport = require("passport");
const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const {
  recipesCreate,
  categoryCreate,
  getCategories,
} = require("./categories.controllers");

router.param("recipesId", async (req, res, next, recipesId) => {
  const recipes = await fetchProduct(recipesId, next);
  if (recipes) {
    req.recipes = recipes;
    next();
  } else {
    next({ status: 404, message: "Product Not Found!" });
  }
});

router.get("/", getCategories);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  categoryCreate
);
router.post(
  "/:categoryId/recipes",


  upload.single("image"),
  recipesCreate
);
module.exports = router;
