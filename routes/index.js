var express = require("express");
var router = express.Router();
let latLang = {};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send(latLang);
});

router.post("/location", function (req, res, next) {
  console.log(req.body);
  latLang.Latitude = req.body.Latitude;
  latLang.Longitude = req.body.Longitude;
  latLang.LastCommunication = req.body.LastCommunication;
  latLang.Status = req.body.Status;
  res.status(200).send("");
});

module.exports = router;
