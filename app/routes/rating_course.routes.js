module.exports = app => {
    const favourite_courses = require("../controllers/rating_course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new rating_courses
    router.post("/", rating_courses.create);

    // Delete a rating_course with utente_id and corso_id
    router.delete("", rating_courses.delete);
  
    app.use('/api/rating_courses', router);
  };