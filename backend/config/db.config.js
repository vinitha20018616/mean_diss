const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

module.exports = {
    url: process.env.MONGO_URI, // Use the environment variable for MongoDB URI
};
