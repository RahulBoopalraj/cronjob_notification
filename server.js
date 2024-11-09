const express = require("express");
const bodyParser = require("body-parser")
const firebaseRoute = require("./src/routes/FirebaseRoute.js");

const port = process.env.PORT || 5000;
// require("./scheduler");

const app = express();
app.use(express.json());

app.use(bodyParser.json())

app.use("/api/firebase", firebaseRoute)

app.listen(port, () => {
    console.log("Server running at port : ", port);
})