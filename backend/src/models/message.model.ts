import mongoose, { Schema, Types } from "mongoose";

export interface IMessage {
    _id?: Types.ObjectId;
    sender: Types.ObjectId;
    receiver: Types.ObjectId;
    message: string;
  }

const messageSchema = new mongoose.Schema<IMessage>({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

export const Message = mongoose.model<IMessage>('Message', messageSchema);