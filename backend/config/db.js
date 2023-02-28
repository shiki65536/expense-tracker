const mongoose = require('mongoose');


mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://shiki:65536@cluster0.pruopa2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: "true",useUnifiedTopology: "true"});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;