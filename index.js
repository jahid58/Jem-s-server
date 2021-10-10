const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/Schema");
const graphqlResolvers = require("./graphql/resolver/resolvers");

const productRouter = require("./router/productRouter");
const port = 4000 || process.env.PORT;

const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

const DATABASE_URL = ` mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fdjas.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(module.exports);
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/product", productRouter);
app.listen(port, () => console.log("listening   4000"));
