var express = require("express");
var router = express.Router();
let latLang = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send(latLang);
});

router.post("/location", function (req, res, next) {
  console.log(req.body);

  let snLatLng = {};
  snLatLng.SN = req.body.SN;
  snLatLng.Latitude = req.body.Latitude;
  snLatLng.Longitude = req.body.Longitude;
  snLatLng.LastCommunication = req.body.LastCommunication;
  snLatLng.Status = req.body.Status;
  if (latLang.length > 0) {
    latLang.pop();
  }
  latLang.push(snLatLng);
  res.status(200).send("success");
});

module.exports = router;
