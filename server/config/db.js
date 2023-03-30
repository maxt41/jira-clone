const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cjag5kn.mongodb.net/test`);
        console.log("Connected to MongoDB...")
    } catch (error) {
        console.error(error.message)
    }
}
module.exports = connectDB;