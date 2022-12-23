const db = require("../models");
const Favourite_course = db.Favourite_course;

// Create and Save a new fav_course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.utente_id || !req.body.corso_id) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a fav_course
    const favourite_course = new Favourite_course({
      utente_id: req.body.utente_id,
      corso_id: req.body.corso_id,
    });
  
    // Save fav_course in the database
    favourite_course
        .save(favourite_course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the fav_course."
            });
        });
};
