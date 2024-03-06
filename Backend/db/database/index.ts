import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://Izanagi:ZHcHedBtrjziJkU0@cluster0.0meqtj5.mongodb.net/";

export const connectDB = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to DB");
  } catch (err) {
    console.log("DB connection is unseccessfully bsdamin");
  }
};
