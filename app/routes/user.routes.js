module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new course
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);

    router.get("/:utente_id/courses", users.findCoursesForUser);
  
    app.use('/api/users', router);
  };