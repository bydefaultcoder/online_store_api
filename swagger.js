// swagger.js


const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API DOCUMENTATION',
      version: '1.0.0',
      description: 'This is the API documentation for your thokBazar backend'
    },
    servers: [
      {
        url: 'http://localhost:' + process.env.PORT,
        description: 'Local server'
      }
    ]
  },
  apis: ['./routes/*.js'], // path where your API route files are
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
