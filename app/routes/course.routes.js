module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    var router = require("express").Router();

    // for info favourite
    router.get("/:id/:utente_id", courses.findOneWithFavorite);
  
    // Update a course with id
    router.put("/:id", courses.update);
  
    // Delete a course with id
    router.delete("/:id", courses.delete);
  
    // Delete all courses
    router.delete("/", courses.deleteAll);

    router.post("/", courses.create);
  
    app.use('/api/courses', router);
  };