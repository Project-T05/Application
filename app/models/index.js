const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.dbURI = dbConfig.dbURI;
db.Course = require("./course.model.js")(mongoose);
db.User = require("./user.model.js")(mongoose);
db.Favourite_course = require("./favourite_course.model.js")(mongoose);
db.Rating_course = require("./rating_course.model.js")(mongoose);

module.exports = db;
