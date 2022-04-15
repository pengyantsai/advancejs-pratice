import express from "express";
const app = express();
import ejs from "ejs";
import https from "https";
import fetch from "node-fetch";
//api key
let key = "9baa373013ff1f2c97362c1f2c7a13f5";

// k to c 溫度轉換
function ktoc(k) {
  return (k - 273.15).toFixed(2);
}

//middleware
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:city", async (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  let d = await fetch(url);
  let djs = await d.json();
  let { temp } = djs.main;
  let newtemp = ktoc(temp);
  res.render("weather.ejs", { djs, newtemp });
  // get request by node.js
  /*
  https
    .get(url, (response) => {
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);

      response.on("data", (data) => {
        let djs = JSON.parse(data); //JASON is a sync fun 不用用 async
        let { temp } = djs.main;
        let newtemp = ktoc(temp);
        res.render("weather.ejs", { djs, newtemp });
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
    */
});

app.listen(3000, () => {
  console.log("serve is running on port 3000");
});
