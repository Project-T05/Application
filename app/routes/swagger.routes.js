module.exports = app => {
    const swaggerUi = require('swagger-ui-express');
  
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup('swagger.json'));
  };