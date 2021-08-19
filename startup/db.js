const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

module.exports = function () {
  mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => {
      console.error("Mongoose connect error: ", err);
    });
};
