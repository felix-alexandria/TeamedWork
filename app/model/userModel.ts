import { Document, Schema, model, models } from "mongoose";

interface iUsers {
  name: string;
  email: string;
  password: string;
  homeAddress: string;
  telephoneNo: number;
}

interface iUsersData extends iUsers, Document {}

const userModel = new Schema<iUsersData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    telephoneNo: {
      type: Number,
    },
  },
  { timestamps: true }
);

const users = models.users || model<iUsersData>("users", userModel);

export default users;
