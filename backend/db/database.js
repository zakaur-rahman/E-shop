import mongoose from "mongoose";

const connectDatabase = async (username, password) => {

    //Database URL
  const dbUrl = `mongodb+srv://${username}:${password}@e-shop.2zicye4.mongodb.net/?retryWrites=true&w=majority`
  if (!dbUrl) {
    console.log("No database URL provided");
    return false;
  }
  await mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Database..."))
    .catch((err) => console.error(`Failed to connect to the database ${err}`));
};

export default connectDatabase