import express from "express";
import dotenv from "dotenv";
dotenv.config(); //reads values from .env file
import cleanEnv from "./utils/cleanEnv";
import cors from "cors";

import universityRoute from "./routes/universityRoute";
import { errorHandler, notFound } from "./middlewares/errorHandler";

const port: number = cleanEnv.PORT;
const app = express();

app.use(cors()); //ability to send http requests from client(s)
app.use(express()); //ability to read values from req.body

app.use("/api/universities", universityRoute);

//error handlers go in the end
app.use(notFound); //once app has gone throughout all middlewares and come here, notFound error middleware automatically executes
app.use(errorHandler); //executes once other middleware throws next(err)

app.listen(port, () => console.log(`server is running on port ${port}`));
