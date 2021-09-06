//Requirements and Declarations
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database");
require("./config/passport");
const router = require("./routes/index");
const admin = require("./routes/admin");
const path = require("path");

//App
const app = express();

//Middelwares
app.use(express.json());
app.use(cors());

//Routers
app.use("/api", router);
app.use("/api/admin", admin);

//Validate production state
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

//Server listening
app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () =>
  console.log("Listening on port 4000")
);
