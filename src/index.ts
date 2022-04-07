import express from "express";
import { WeatherRouter } from "./routes/weather";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/weather", WeatherRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});

