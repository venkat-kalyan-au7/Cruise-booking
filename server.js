
import mongoose from "mongoose"

import dotenv from "dotenv"

import app from "./app"


process.on('uncaughtException', err => {
  console.error('UNCAUGHT ERROR!!!!!!! ');
  console.error(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });


const DB = process.env.DB_URL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology:true
  })
  .then(() => console.info('Database connected'));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.info(`App running on port ===> ${port}`);
});

process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
