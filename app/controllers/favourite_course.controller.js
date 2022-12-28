const db = require("../models");
const Favourite_course = db.Favourite_course;

// Create and Save a new fav_course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.utente_id || !req.body.corso_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const favourite_course = new Favourite_course({
    utente_id: req.body.utente_id,
    corso_id: req.body.corso_id,
  });

  Favourite_course.find({ utente_id: req.body.utente_id, corso_id: req.body.corso_id })
  .then((associations) => {
    if (associations.length > 0){
      res.status(500).send({
        message: "There is already a favourite association for this user."
      });
    } else {
      favourite_course.save(favourite_course)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the fav_course."
        })
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error occurred while checking for existing favourite association."
    });
  });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.utente_id || !req.body.corso_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Favourite_course.deleteOne({ utente_id: req.body.utente_id, corso_id: req.body.corso_id })
  .then(() => {
    res.send({ message: "Favourite course was deleted successfully." });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message || "Error occurred while deleting favourite course." });
  });
};