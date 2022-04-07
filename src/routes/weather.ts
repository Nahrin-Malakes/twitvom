import { Router } from "express";
import OpenWeatherMap from "openweathermap-ts";
import dotenv from "dotenv";
dotenv.config();

export const WeatherRouter = Router();

WeatherRouter.get("/", async (_, res) => {
  const openWeather = new OpenWeatherMap({
    apiKey: "5581e5b924854e69fe171f17c94982c2",
    language: "he",
    units: "metric",
  });

  const resp = await openWeather.getByGeoCoordinates({
    latitude: 32.50445695012071,
    longitude: 35.447884951345195,
    queryType: "weather",
  });

  res.json({ resp });
});

