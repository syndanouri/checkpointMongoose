const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose
    .connect("mongodb://0.0.0.0:27017/person", {
      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("database connected");
      //
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
