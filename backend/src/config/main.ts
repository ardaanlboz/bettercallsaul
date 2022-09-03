import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5005;
export const host = process.env.HOST || "localhost";
export const mongodbUri = process.env.DB_URI! || "mongodb+srv://hophackathonname:BcImtcJbacENrJeX@alperebasanhackathon.8pxltj8.mongodb.net/heisenberg";