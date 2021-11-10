const mongoose = require("mongoose");

// REVIEW: This should be gitignored it might cause issues
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ghadahb:Budhhair999@cluster0.pxvh5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
