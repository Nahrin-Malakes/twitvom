import express from "express";
import { WeatherRouter } from "./routes/weather";

const app = express();

app.use("/weather", WeatherRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on ${process.env.PORT || 4000}`);
});

