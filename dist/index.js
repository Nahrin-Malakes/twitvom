"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_1 = require("./routes/weather");
const app = (0, express_1.default)();
app.use("/weather", weather_1.WeatherRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map