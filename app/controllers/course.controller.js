const db = require("../models");
const Course = db.Course;
const Favourite_course = db.Favourite_course;

// Create and Save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Course
    const course = new Course({
      nome: req.body.nome,
      numero_cfu: req.body.numero_cfu,
      valutazione_corso: req.body.valutazione_corso,
      attivo: req.body.attivo ? req.body.attivo : true,
      utente_id: req.body.utente_id
    });
  
    // Save Course in the database
    course
        .save(course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Course."
            });
        });
};

exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { $regex: new RegExp(nome), $options: "i" } } : {};
  
    Course.find(condition)
      .populate("utente_id", "nome cognome")
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
};

// Find a single Course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Course.findById(id)
      .populate("utente_id", "nome cognome")
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Course with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Course with id=" + id });
      });
};

exports.findOneWithFavorite = (req, res) => {
  const id = req.params.id;
  const utente_id = req.params.utente_id;

  Course.findById(id)
    .populate("utente_id", "nome cognome")
    .then(async data => {
      if (!data) {
        res.status(404).send({ message: "Not found Course with id " + id });
      } else {
        const favouriteCourse = await Favourite_course.findOne({ utente_id: utente_id, corso_id: id });
        data = data.toObject()
        data.id = data._id
        if (favouriteCourse) {
          data.is_favourite = true;
        } else {
          data.is_favourite = false;
        }
        res.send(data)
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Course with id=" + id });
    });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Course with id=${id}. Maybe Course was not found!`
          });
        } else res.send({ message: "Course was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Course with id=" + id
        });
      });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Course.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
          });
        } else {
          res.send({
            message: "Course was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Course with id=" + id
        });
      });
};

// Delete all courses from the database.
exports.deleteAll = (req, res) => {
    Course.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} courses were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courses."
        });
      });
};
