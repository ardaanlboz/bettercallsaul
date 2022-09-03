/* eslint-disable class-methods-use-this */
import { models } from "../modules/Mongo";

export default class CreateTutorService {
  async execute(
    name: string,
    email: string,
    password: string,
    expertise: string[],
  ) {
    const newTutor = new models.Tutor({
        name,
        email,
        password,
        expertise,
    });

    await newTutor.save();

    return newTutor;
  }
}