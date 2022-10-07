import messages from "./messages.js";

const resolvers = {
  Query: {
    ...messages.Query,
  },
  Mutation: {
    ...messages.Mutation,
  },
};

export default resolvers;
