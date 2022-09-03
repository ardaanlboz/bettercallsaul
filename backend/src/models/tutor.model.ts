import mongoose, { Schema, Types } from "mongoose";
import { AllExpertise } from "./expertiseType";

export interface ITutor {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  expertise: AllExpertise[];
  tutorPoints?: number;
}

const tutorSchema = new mongoose.Schema<ITutor>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  expertise: {
    type: [String],
    required: true,
  },
  tutorPoints: {
    type: Number,
    default: 0,
  },
});

export const Tutor = mongoose.model<ITutor>("Tutor", tutorSchema);