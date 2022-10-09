import { ApolloError } from "apollo-server-express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../../models/index.js";

const user = {
  Query: {
    getAllUsers: async () => await User.find(),
    getUser: async (_, { ID }) => await User.findById(ID),
  },
  Mutation: {
    registerUser: async (
      _,
      { registerUserArgs: { username, email, password } }
    ) => {
      // First, check if another user with the input email already exists
      const existingUserEmail = await User.findOne({ email });

      if (existingUserEmail) {
        throw new ApolloError(
          `A user is already registered with the email: ${email}`,
          "EMAIL_ALREADY_EXISTS"
        );
      }

      // Next, check the same for the username
      const existingUserUsername = await User.findOne({ username });

      if (existingUserUsername) {
        throw new ApolloError(
          `A user is already registered with the username: ${username}`,
          "USERNAME_ALREADY_EXISTS"
        );
      }

      // if prior checks don't throw an error, this is indeed a new user
      // Then, encrypt password
      const encryptedPassword = await bcrypt.hash(password, 12);

      // Build new user obj using the Mongoose model
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
        createdAt: new Date().toISOString(),
      });

      // Create JWT and apply it to User, as the token
      const token = jwt.sign(
        {
          user_id: newUser._id,
          email,
        },
        // secret will be implemented later
        "UNSAFE_SECRET",
        { expiresIn: "3h" }
      );

      newUser.token = token;

      // Save newly registered user to Mongo
      const res = await newUser.save();
      // console.log(res);
      // console.log(res._id);
      // console.log(res.id);
      return {
        id: res.id,
        ...res._doc,
      };
    },
    loginUser: async (_, { loginUserArgs: { username, password } }) => {
      // first, check if user with this username exists
      const loginUser = await User.findOne({ username });

      // decrypt password and check if input value is equal to the
      // stored passowrd
      if (loginUser && (await bcrypt.compare(password, loginUser.password))) {
        console.log(loginUser);

        // generate a new token for the user when they login
        // and apply this new jwt token as the token property of the user
        const token = jwt.sign(
          {
            user_id: loginUser._id,
            email: loginUser.email
          },
          // JWT secret
          "UNSAFE_SECRET",
          { expiresIn: "3h" }
        );

        loginUser.token = token;
        return {
          id: loginUser.id,
          ...loginUser._doc,
        };
      } else {
        // If username does not exist or password is incorrect, throw error
        throw new ApolloError("Incorrect username or password", "INVALID_LOGIN")
      }
    },
  },
};

export default user;
