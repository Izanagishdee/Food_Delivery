import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://Izanagi:a5NCtX5zkJF4ey0e@cluster0.0meqtj5.mongodb.net/";

export const connectDB = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to DB");
  } catch (err) {
    console.log("DB connection is unseccessfully");
  }
};
