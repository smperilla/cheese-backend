const express = require("express");
const router = express.Router();
const Cheese = require("../models/Cheese"); 

// Index 
router.get("/", async (req, res) => {
    try {
      res.json(await Cheese.find());
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

  
  // CREATE
  router.post("/", async (req, res) => {
    try {
      res.json(await Cheese.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // SHOW
  router.get("/:id", async (req, res) => {
    try {
      res.json(await Cheese.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // DELETE
  router.delete("/:id", async (req, res) => {
    try {
      console.log(req.params.id);
      res.json(await Cheese.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // UPDATE
  router.put("/:id", async (req, res) => {
    try {
      console.log(req.params.id);
      res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, {new:true} ));
    } catch (error) {
      res.status(400).json(error);
    }
  })
  
  module.exports = router;
