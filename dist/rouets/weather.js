"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherRouter = void 0;
const express_1 = require("express");
const openweathermap_ts_1 = __importDefault(require("openweathermap-ts"));
exports.WeatherRouter = (0, express_1.Router)();
exports.WeatherRouter.get("/", async (_, res) => {
    const openWeather = new openweathermap_ts_1.default({
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
//# sourceMappingURL=weather.js.map