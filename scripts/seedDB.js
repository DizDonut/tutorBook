const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/baobaoBook",
    {
      useMongoClient: true
    }
  );

  //this file does nothing yet...could seed some data to help with testing