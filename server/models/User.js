import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { 
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true,
  },
  token: String,
  createdAt: String,
  messageId: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
});

export default model("User", userSchema);