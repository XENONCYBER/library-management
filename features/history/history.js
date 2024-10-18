const express = require("express");
const { client } = require("../../db");

const router = express.Router();

const db = client.db("library");

router.get("/history", async (req, res) => {
  try {
    const historyCollection = db.collection("history");
    const bookCollection = db.collection("books");
    const historyData = await historyCollection.find().toArray();
    const bookData = await bookCollection.find().toArray();
    res.json(historyData);
    res.json(bookData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching history data");
  }
});

module.exports = router;
