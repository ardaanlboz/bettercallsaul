/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express } from "express";
import * as bodyParser from "body-parser";
import { port } from "./config/main";
import ServerError from "./types/server.error";
import FailResult from "./utils/failResult";
import TutorRouter from "./routers/tutors";
import UserRouter from "./routers/users";


const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`🚀 ${req.method} - ${req.url}`);
  next();
});

/*
  Routers
*/

app.use("/users", UserRouter)
app.use("/tutors", TutorRouter);

/*
  Error Handler
*/

app.use((err: ServerError | Error, req:any, res:any, next:any) => {
  console.error(`Url: ${req.url}`);
  console.error(err.stack);

  res
    .status((err as ServerError).status || 500)
    .json(new FailResult(err.message));
});

/*
  404 Not Found - Handler
*/

app.use((req, res, next) => {
  res.status(404).json(new FailResult("Not Found"));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});