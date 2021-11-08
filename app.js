const express = require("express");
const connectDB = require("./db/database");
const morgan = require("morgan");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./apis/user/users.routes");
const app = express();
const passport = require("passport");
const { localStrategy } = require("./middleware/passport");

app.use(cors());

connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// Passport
app.use(passport.initialize());
passport.use(localStrategy);

// Routes
app.use("/api", userRoutes);

app.use(errorHandler);

const PORT = 8002;
app.listen(PORT, () => console.log(`Application is running on localhost: ${PORT}`));