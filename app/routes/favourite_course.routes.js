module.exports = app => {
    const favourite_courses = require("../controllers/favourite_course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new favourite_courses
    router.post("/", favourite_courses.create);

    // Delete a favourite_course with utente_id and corso_id
    router.delete('/:utente_id/:corso_id', favourite_courses.deleteFromFavourites);
  
    app.use('/api/favourite_courses', router);
  };