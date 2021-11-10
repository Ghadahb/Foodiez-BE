const express = require("express");
const connectDB = require("./db/database");
const morgan = require("morgan");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./apis/user/users.routes");
const app = express();
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const categoriesRoutes = require("./apis/category/categories.routes");
const recipesRoutes = require("./apis/recipes/recipes.routes");

app.use(cors());

connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routes
app.use("/api", userRoutes);
// REVIEW: it should be /api/categories
app.use("/api/category", categoriesRoutes);
// REVIEW: Why is this /api/category?
app.use("/api/category", recipesRoutes);
// REVIEW: Your media route is missing, that's why your images won't work

app.use(errorHandler);

const PORT = 8002;
app.listen(PORT, () =>
  console.log(`Application is running on localhost: ${PORT}`)
);
