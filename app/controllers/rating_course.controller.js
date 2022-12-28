const db = require("../models");
const Rating_course = db.Rating_course;

// Create and Save a new fav_course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.utente_id || !req.body.corso_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const rating_course = new Rating_course({
    utente_id: req.body.utente_id,
    corso_id: req.body.corso_id,
  });

  Rating_course.find({ utente_id: req.body.utente_id, corso_id: req.body.corso_id })
  .then((associations) => {
    if (associations.length > 0){
      res.status(500).send({
        message: "There is already a rating association for this user."
      });
    } else {
      rating_course.save(rating_course)
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
      message: err.message || "Error occurred while checking for existing rating association."
    });
  });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.utente_id || !req.body.corso_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Rating_course.deleteOne({ utente_id: req.body.utente_id, corso_id: req.body.corso_id })
  .then(() => {
    res.send({ message: "Rating course was deleted successfully." });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message || "Error occurred while deleting rating course." });
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Rating_course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Rating_course with id=${id}. Maybe Rating_course was not found!`
        });
      } else {
        res.send({ message: "Rating_course was updated successfully." })
        
      };
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Rating_course with id=" + id
      });
    });
};