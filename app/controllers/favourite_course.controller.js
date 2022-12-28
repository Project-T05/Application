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

exports.deleteFromFavourites = (req, res) => {
  // Verifica che l'ID utente e l'ID corso siano presenti nella richiesta
  if (!req.params.utente_id || !req.params.corso_id) {
    res.status(400).send({ message: "Utente ID and course ID can not be empty." });
    return;
  }

  // Cerca l'associazione corso-utente da eliminare
  Favourite_course.findOneAndDelete({ utente_id: req.params.utente_id, corso_id: req.params.corso_id })
    .then((association) => {
      if (!association) {
        res.status(404).send({ message: "Association not found." });
        return;
      }
      res.send({ message: "Association was deleted successfully." });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        res.status(404).send({ message: "Association not found." });
      } else {
        res.status(500).send({ message: "Could not delete association." });
      }
    });
};