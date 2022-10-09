import { Message } from "../../models/index.js";

const message = {
  Query: {
    getAllMessages: async () => await Message.find(),
    getMessage: async (_, { ID }) => await Message.findById(ID),
  },
  Mutation: {
    createMessage: async (_, { messageArgs: { text, username } }) => {
      const newMessage = new Message({
        text: text,
        createdBy: username,
        createdAt: new Date().toISOString(),
      });

      const res = await newMessage.save();
      // console.log(res);
      // console.log(res._id);
      // console.log(res._id.toString());
      // console.log(res.id);
      return {
        id: res.id,
        ...res._doc,
      };
    },
    updateMessage: async (_, { ID, text }) =>
      await Message.findByIdAndUpdate(
        ID,
        {
          $set: {
            text: text,
          },
        },
        {
          // setting new to true retrieves the query data AFTER its been updated
          new: true,
        }
      ),
    deleteMessage: async (_, { ID }) => await Message.findByIdAndDelete(ID),
  },
};

export default message;
