import mongoose from "mongoose";
import { mongodbUri } from "../config/main";
import { Tutor } from "../models/tutor.model";
import { User } from "../models/user.model";
import { Message } from "../models/message.model";


mongoose.connect(mongodbUri);

const models = {
    User,
    Tutor,
    Message,
};

export { models, mongoose };