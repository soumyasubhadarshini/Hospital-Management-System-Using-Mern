const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv loads the environment variables

// MongoDB connection string and JWT secret from environment variables
const config = {
  jwtSecret: process.env.JWT_SECRET || '5a8075715a98343b3ea3c76bc4eb7704c1f3ee6bfc4d65cf2fcc58e5eacb1c5badc9818885ffd1e5d6966eca5e94b6b426c700c9692d16f9c52b2ab076bdda98', // Default fallback key
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/hospitalDB', // Fallback to local MongoDB if not set
};

// MongoDB connection function
const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
};

// Export both the config and connectToDatabase function
module.exports = { config, connectToDatabase };
