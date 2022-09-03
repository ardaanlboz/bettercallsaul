/* eslint-disable class-methods-use-this */
import { Types } from "mongoose";
import { models } from "../modules/Mongo";

export default class CreateMessageService {
  async execute(from: Types.ObjectId, to: Types.ObjectId, message: string) {
    const newMessage = await models.Message.create({
        sender: from,
        receiver: to,
        message
    });

    return newMessage;
  }
}