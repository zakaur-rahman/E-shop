import dotenv from 'dotenv'
import app from "./app.js";

import connectDatabase from "./db/database.js";

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
});



// config
dotenv.config({path:'./config/.env'});

// Connect Database
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

//connectDatabase(username, password)

// create server
const server = app.listen(process.env.PORT || 8000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

// unhandled promice rejection

process.on("unhandledRejection", (err) => {
  console.log(`Unhandled Rejection at Promise`);
  console.log(`Shutting down the server for: ${err.message}`);

  server.close(() => {
    process.exit(1);
  });
});
