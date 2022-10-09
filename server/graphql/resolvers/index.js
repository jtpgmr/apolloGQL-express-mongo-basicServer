import message from "./message.js";
import user from "./user.js"

const resolvers = {
  Query: {
    ...message.Query,
    ...user.Query,
  },
  Mutation: {
    ...message.Mutation,
    ...user.Mutation,
  },
};

export default resolvers;
