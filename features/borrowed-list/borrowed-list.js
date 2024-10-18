const express = require("express");
const { client } = require("../../db");

const router = express.Router();

const db = client.db("library");

router.get("/borrowedList", async (req, res) => {
  try {
    const borrowedCollection = db.collection("borrowedBooks");
    const borrowedData = await borrowedCollection.find().toArray();
    res.json(borrowedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching borrowed data");
  }
});

module.exports = router;