const mongoose = require("mongoose");
const mongo = require("../config/db.config")

module.exports = async () => {
  const mongoUri = mongo.mongoUri
  try {
    const connect = await mongoose.connect(mongoUri);
    console.log(`mongoDb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
};