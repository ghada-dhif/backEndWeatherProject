const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios").default;
const cors = require("cors");

const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.status(200).json("Backend server working properly! 🙌 ");
});
app.get("/json", function (req, res) {
  res.status(200).json({ message: "ok" });
});
let cities = [];
getAllCities().then((res) => {
  cities = res.data
    .map((city) => {
      return city.name.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    })
    .filter((item) => !item.includes(" "));
});
function getWeather(city) {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7416d45e0fc4254f5c8e7bbb442f0b47`,
  });
}

async function getAllCities() {
  return axios({ url: `https://restcountries.com/v2/all` });
}
// Server start
server.listen(3001, function () {
  console.log("Votre app est disponible sur localhost:3001 !");
});
