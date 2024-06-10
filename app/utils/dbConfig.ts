import { connect } from "mongoose";

const url: string = "mongodb://localhost:127.0.0.1:27017/rentalDB";

export const dbConfig = async () => {
  try {
    await connect(url)
      .then(() => {
        console.log("Database connection established");
      })
      .catch((err) => console.error(err));
  } catch (error) {
    return console.error(error);
  }
};
