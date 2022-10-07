import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  text: String,
  createdAt: String,
  createdBy: String,
});

// the "Message" string dictates the name of the collection on Mongo
export default model("Message", messageSchema);
