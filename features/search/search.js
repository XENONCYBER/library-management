const express = require("express");
const { client } = require("../../db");

const router = express.Router();

router.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send("Query parameter is required");
  }

  try {
    await client.connect();
    const library = client.db("library").collection("books");
    const results = await library
      .find({ title: { $regex: query, $options: "i" } })
      .toArray();
    res.json(results);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
  }
});

module.exports = router;
