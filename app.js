const express = require("express");
const connectDB = require("./db/database");
const cors = require("cors");
const logger = require("./middleware/logger");
const userRoutes = require("./apis/user/users.routes");
const app = express();

app.use(cors());

connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes

app.use("/api", userRoutes);




const PORT = 8002;
app.listen(PORT, () => console.log(`Application is running on localhost: ${PORT}`));