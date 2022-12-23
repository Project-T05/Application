module.exports = app => {
    const favourite_courses = require("../controllers/favourite_course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new favourite_courses
    router.post("/", favourite_courses.create);
  
    app.use('/api/favourite_courses', router);
  };