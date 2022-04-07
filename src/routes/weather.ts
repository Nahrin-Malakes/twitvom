import { Router } from "express";
import OpenWeatherMap from "openweathermap-ts";

export const WeatherRouter = Router();

WeatherRouter.get("/", async (_, res) => {
  const openWeather = new OpenWeatherMap({
    apiKey: process.env.API_KEY,
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

