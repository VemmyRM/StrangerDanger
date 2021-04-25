const express = require("express");
const bodyParser = require("body-parser");
// // const pino = require("express-pino-logger")();
// // const client = require("twilio")(
// //   process.env.TWILIO_ACCOUNT_SID,
// //   process.env.TWILIO_AUTH_TOKEN
// // );

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var twilio = require("twilio");

var accountSid = "ACda803fe28e3b582cf3b545e7cf6c7f55"; // Your Account SID from www.twilio.com/console
var authToken = "4ec41599c38745ccb11941e45bacb5a5"; // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

console.log("hello!");

// app.use(pino);

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";

//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      body: "Express Server via postman",
      to: "+18735000063", // Text this number
      from: "+17066617245", // From a valid Twilio number
    })
    .then((message) => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
