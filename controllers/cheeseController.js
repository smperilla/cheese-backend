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
  
  