const express = require("express");
const { client } = require("../../db");

const router = express.Router();

const db = client.db("library");

router.post("/borrow", async (req, res) => {
  const { bookCode, bookName, designation, usn } = req.body;
  const borrowedBook = {
    bookCode,
    bookName,
    designation,
    usn,
    borrowedAt: new Date().toISOString().split("T")[0],
    returnedAt: null,
  };
  try {
    const collection = db.collection("borrowedBooks");
    await collection.insertOne(borrowedBook);
    res.send("Book borrowed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error borrowing book");
  }
});

module.exports = router;
