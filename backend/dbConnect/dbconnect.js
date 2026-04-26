const mongoose = require('mongoose');

const connectD = async function () {
    try {
        console.log("⏳ Connecting to Local MongoDB...");
        // Fast-fail if local mongo is not running
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 3000 
        });
        console.log("✅ MongoDB connected successfully (Local)");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        console.log("👉 Make sure your local MongoDB service is running on port 27017.");
    }
}

module.exports = connectD;