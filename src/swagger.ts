import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Delivery App",
      version: "1.0.0",
    },
  },
  apis: ["./src/routers/*.ts"], // files containing annotations as above
};

const openapiDoc = swaggerJsdoc(options);

export default openapiDoc;
