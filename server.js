const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const swaggerDocument = require('./swagger.json')
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const db = require("./app/models");
db.mongoose
  .connect(db.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ypsilon 2',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8080/',
      },
    ],
  },
  apis: ['./app/controllers/course.routes.js'],
};

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/course.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/favourite_course.routes")(app);
require("./app/routes/rating_course.routes")(app);
// require("./app/routes/swagger.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
