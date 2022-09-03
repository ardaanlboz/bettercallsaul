/* eslint-disable class-methods-use-this */
import { models } from "../modules/Mongo";

export default class CreateUserService {
  async execute(
    name: string,
    email: string,
    password: string,
  ) {
    const newUser = new models.User({
        name,
        email,
        password,
    });

    await newUser.save();

    return newUser;
  }
}