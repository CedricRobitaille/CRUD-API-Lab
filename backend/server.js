const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to  MongoDB ${mongoose.connection.name}.`)
});

app.use(express.json());

const cors = require("cors")
app.use(cors());



const applicationsCtrl = require("./controllers/applications.js");

app.get("/api/applications", applicationsCtrl.index);
app.post("/api/applications", applicationsCtrl.create);
app.put("/api/applications/:appId", applicationsCtrl.update);
app.delete("/api/applications/:appId", applicationsCtrl.del);






// Listen to port 3000
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})