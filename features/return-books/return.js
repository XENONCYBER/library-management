const express = require("express");
const { client } = require("../../db");

const router = express.Router();

const db = client.db("library");

router.post("/return", async (req, res) => {
  const { bookCode, usn } = req.body;
  const returnDate = new Date().toISOString().split("T")[0];
  try {
    const collection = db.collection("borrowedBooks");

    const borrowedBook = await collection.findOne({
      bookCode,
      usn,
      returnedAt: null,
    });

    if (!borrowedBook) {
      res.status(404).send("Book not found or already returned");
      return;
    }

    borrowedBook.returnedAt = returnDate;

    const historyCollection = db.collection("history");
    await historyCollection.insertOne(borrowedBook);

    await collection.deleteOne({ _id: borrowedBook._id });

    res.send("Book returned successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error returning book");
  }
});

module.exports = router;
