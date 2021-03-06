/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
var cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	console.log("Things are working");
	res.send("hey there!!");
});

app.post("/free_trial", (req, res) => {
	console.log(req.body);
	res.json({
		version: "1.0.0",
		courseNumber: "ucs305",
		customerName: req.body.username,
	});
});

app.listen(port, () => console.log(`listening at port:${port}`));
