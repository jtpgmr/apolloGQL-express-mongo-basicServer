import { gql } from "apollo-server-express";

export default gql`
  type User {
    username: String
    email: String
    password: String
    token: String
    createdAt: String
  }

  input RegisterUserArgs {
    username: String
    email: String
    password: String
  }

  input LoginUserArgs {
    username: String
    password: String
  }

  type Query {
    getAllUsers: [User!]!
    getUser(ID: ID!): User
  }

  type Mutation {
    registerUser(registerUserArgs: RegisterUserArgs): User
    loginUser(loginUserArgs: LoginUserArgs): User
  }
`;
