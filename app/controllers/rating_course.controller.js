const db = require("../models");
const Rating_course = db.Rating_course;
const Course = db.Course;

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
        updateCourseRating(req.body.corso_id)
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
    updateCourseRating(req.body.corso_id)
    res.send({ message: "Rating course was deleted successfully." });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message || "Error occurred while deleting rating course." });
  });
};

exports.findAndUpdate = (req, res) => {
  // Trova il documento con l'utente e il corso specificati
  Rating_course.findOneAndUpdate(
    { utente_id: req.params.utente_id, corso_id: req.params.corso_id },
    { $set: { valutazione: req.body.valutazione } },
    { upsert: true, new: true }
  // con upsert se non lo trova lo crea nuovo!
  )
    .then((rating) => {
      updateCourseRating(req.params.corso_id)
      res.send(rating);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating rating.",
      });
    });
};

const updateCourseRating = (corso_id) => {
  // Trova tutti i documenti di Rating_course con il corso_id specificato
  Rating_course.find({ corso_id: corso_id })
    .then((ratings) => {
      // Calcola la media delle valutazioni
      const ratingSum = ratings.reduce((acc, rating) => acc + rating.valutazione, 0);
      const ratingCount = ratings.length;
      const ratingAvg = ratingSum / ratingCount;

      // Aggiorna il campo "valutazione_corso" del corso con il nuovo rating calcolato
      Course.findOneAndUpdate(
        { _id: corso_id },
        { $set: { valutazione_corso: ratingAvg } },
        { new: true }
      )
        .then((course) => {
          console.log(`Updated rating for course with id ${corso_id}: ${ratingAvg}`);
        })
        .catch((err) => {
          console.log(`Error updating rating for course with id ${corso_id}: ${err}`);
        });
    })
    .catch((err) => {
      console.log(`Error finding ratings for course with id ${corso_id}: ${err}`);
    });
}
