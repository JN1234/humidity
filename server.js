const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
//connect
const db = require("./utility/db");
const { infoValidation } = require("./utility/validaters");

const app = express();
var port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.static("uploads"));

app.post("/data", async (req, res) => {
  //Validate data
  const { error } = infoValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //add to db
  try {
    const results = await db.createData(req.body);

    res.status(201).json({ id: results[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
app.get("/data", async (req, res) => {
  //get db data
  try {
    const results = await db.getData();

    res.status(200).json({ data: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
app.patch("/data/:id/:humid/:temp", async (req, res) => {
  //Validate data
  //update db
  try {
    const id = await db.updateData(req.params.id, {
      humidity: req.params.humid,
      temperature: req.params.temp,
    });

    res.status(200).json({ id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
app.listen(port, () => {
  console.log("Listening on port " + port);
});
