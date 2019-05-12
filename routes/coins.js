var express = require('express');
var router = express.Router();
var coins = require('../models/Coin');

/* GET coins listing. */
router.get('/', function(req, res, next) {
  coins.find({}, (err,docs)=>{
    if(err){
      res.status(400).json({"success": false})
    }else{
      res.status(200).json({
        "success": true,
        "docs": docs
      })
    }
  })
});
/* GET coin by id listing. */
router.get("/:country", function(req,res,next){
  var country = req.params.country || "";
  if(country === ""){
    res.status(400).json({
      "success":false
    })
  }else{
    coins.find({country: req.params.country},(err,coins)=>{
      if(err){
        res.status(400).json({
          "success":false
        })
      }else{
        console.log(coins)
        res.status(200).json({
          "success": true,
          "ok": true,
          "coin": coins
        })
      }
    })
  }
})
/* put coins listing. */
router.put("/",function(req,res,next){
  let data = {
    name: req.body.name,
    country: req.body.country,
    year: req.body.year,
    isAvailable: req.body.isAvailable,
    value_us: req.body.value_us,
    img: req.body.img
  }

  var coin = new coins(data);
  coin.save((err,iCoin)=>{
    if(err){
      res.status(400).json({
        "success": false
      })
    }else{
      res.status(200).json({
        "success": true,
        iCoin})
    }
  })

})

module.exports = router;