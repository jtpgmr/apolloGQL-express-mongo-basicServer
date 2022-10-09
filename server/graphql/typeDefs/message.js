import { gql } from "apollo-server-express";

export default gql`
  type Message {
    text: String
    createdAt: String
    createdBy: String
  }

  # input args for Message mutations (messages resolvers)
  input MessageArgs {
    text: String
    username: String
  }

  type Query {
    getAllMessages: [Message!]!
    getMessage(ID: ID!): Message
  }

  type Mutation {
    # broken up as:
    # mutation     input var    input args    output
    createMessage(messageArgs: MessageArgs): Message!
    updateMessage(ID: ID!, text: String!): Message!
    deleteMessage(ID: ID!): Message!
  }
`;
