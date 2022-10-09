import { ApolloServer } from "apollo-server-express";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import { messageTypeDefs, userTypeDefs } from "./graphql/typeDefs/index.js";
import resolvers from "./graphql/resolvers/index.js";

dotenv.config();
const { PORT } = process.env;

const app = express();
// Connect to MongoDB Project Database
connectDB();
app.use(cors());

const server = new ApolloServer({ 
  typeDefs: [messageTypeDefs, userTypeDefs], 
  resolvers 
});

await server.start();

// this is one key diff btwn apollo-server and apollo-server-express
// in this case, the server is middleware being applied to the express app
server.applyMiddleware({ app });

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
