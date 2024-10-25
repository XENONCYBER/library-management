const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const searchRoutes = require("./features/search/search");
const borrow = require("./features/borrow-books/borrow");
const returnBook = require("./features/return-books/return");
const getHistory = require("./features/history/history");
const getBorrowedList = require("./features/borrowed-list/borrowed-list");

const app = express();

const port = 8081;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(searchRoutes);
app.use("/api", borrow);
app.use("/api", returnBook);
app.use("/api", getHistory);
app.use("/api", getBorrowedList);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
