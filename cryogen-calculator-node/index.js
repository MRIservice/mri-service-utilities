const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const indexHtml = path.join(__dirname + "/index.html");

app.get("/", function(req, res) {
  return res.sendFile(indexHtml);
});

app.post("/cryo", urlencodedParser, (req, res) => {
  const MongoClient = require("mongodb").MongoClient;

  // Connection URL
  // const url = process.env.MONGODB_URI;
  const url =
    "mongodb://magUser:Cryo%$7&guts9pump#theHeck1@mriservice.com:27017/magnet";

  // Database Name
  const dbName = "magnet";

  // Create a new MongoClient
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect(async function(err, client) {
	
    const db = client.db(dbName);
    await db.collection("cryo").insertOne(req.body);
    return res.json(req.body);
  });
});

app.get("/cryo", (req, res) => {
  const MongoClient = require("mongodb").MongoClient;

  // Connection URL
  // const url = process.env.MONGODB_URI;
  const url =
    "mongodb://magUser:Cryo%$7&guts9pump#theHeck1@mriservice.com:27017/magnet";

  // Database Name
  const dbName = "magnet";

  // Create a new MongoClient
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect(async function(err, client) {
    const db = client.db(dbName);
    const cryo = await db
      .collection("cryo")
      .find()
      .toArray();

    return res.json({ cryo: cryo });
  });
});


app.get("/:filename", (req, res) =>
  res.sendFile(path.join(__dirname + "/" + req.params.filename))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
