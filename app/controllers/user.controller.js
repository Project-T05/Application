const db = require("../models");
const User = db.User;
const Favourite_course = db.Favourite_course;
const Course = db.Course;


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome || !req.body.cognome) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a User
  const user = new User({
    nome: req.body.nome,
    cognome: req.body.cognome,
  });

  // Save User in the database
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { $regex: new RegExp(nome), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Retrieve all courses for a specific user
exports.findCoursesForUser = (req, res) => {
  // Validate request
  if (!req.params.utente_id) {
    res.status(400).send({ message: "User ID can not be empty!" });
    return;
  }

  // Find all course-user associations for the specified user
  Favourite_course.find({ utente_id: req.params.utente_id })
    .then((associations) => {
      // Extract the course IDs from the associations
      const courseIds = associations.map((association) => association.corso_id.toString());
      
      const nome = req.query.nome;
      var condition = nome ? { nome: { $regex: new RegExp(nome), $options: "i" } } : {};
    
      Course.find(condition)
        .populate("utente_id", "nome cognome")
        .sort({ valutazione_corso: -1 })
        .then(data => {
          const coursesWithIsFavourite = data.map((course) => {
            return {
              id: course.id,
              nome: course.nome,
              numero_cfu: course.numero_cfu,
              valutazione_corso: course.valutazione_corso,
              attivo: course.attivo,
              utente_id: course.utente_id,
              // Aggiungi qui altre proprietà se necessario
              is_favourite: courseIds.includes(course.id)
            }
          });
          res.send(coursesWithIsFavourite);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving courses."
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving course-user associations for user.",
      });
    });
};

// Retrieve all courses for a specific user
exports.findCoursesForUserFilteredByNome = (req, res) => {
  // Validate request
  if (!req.params.utente_id) {
    res.status(400).send({ message: "User ID can not be empty!" });
    return;
  }

  // Find all course-user associations for the specified user
  Favourite_course.find({ utente_id: req.params.utente_id })
    .then((associations) => {
      // Extract the course IDs from the associations
      const courseIds = associations.map((association) => association.corso_id.toString());
      
      const prefix = req.params.nome;
    
      Course.find({ nome: { $regex: "^" + prefix, $options: "i" } })
        .populate("utente_id", "nome cognome")
        .sort({ valutazione_corso: -1 })
        .then(data => {
          const coursesWithIsFavourite = data.map((course) => {
            return {
              id: course.id,
              nome: course.nome,
              numero_cfu: course.numero_cfu,
              valutazione_corso: course.valutazione_corso,
              attivo: course.attivo,
              utente_id: course.utente_id,
              // Aggiungi qui altre proprietà se necessario
              is_favourite: courseIds.includes(course.id)
            }
          });
          res.send(coursesWithIsFavourite);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving courses."
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving course-user associations for user.",
      });
    });
};

// Retrieve all fav courses for a specific user
exports.findFavCoursesForUser = (req, res) => {
  // Validate request
  if (!req.params.utente_id) {
    res.status(400).send({ message: "User ID can not be empty!" });
    return;
  }

  // Find all course-user associations for the specified user
  Favourite_course.find({ utente_id: req.params.utente_id })
    .then((associations) => {
      // Extract the course IDs from the associations
      const courseIds = associations.map((association) => association.corso_id);

      // Find all courses with the extracted IDs
      Course.find({ _id: { $in: courseIds } })
        .populate("utente_id", "nome cognome")
        .then((data) => {
          const coursesWithIsFavourite = data.map((course) => {
            return {
              id: course.id,
              nome: course.nome,
              numero_cfu: course.numero_cfu,
              valutazione_corso: course.valutazione_corso,
              attivo: course.attivo,
              utente_id: course.utente_id,
              // Aggiungi qui altre proprietà se necessario
              is_favourite: true
            }
          });
          res.send(coursesWithIsFavourite);
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error retrieving courses for user.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving course-user associations for user.",
      });
    });
};

