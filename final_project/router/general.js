const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (!isValid(username)) {
    return res.status(409).json({ message: "Username already exists" });
  }

  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Get the book list available in the shop
const getAllBooksHandler = (req, res) => {
  return res.status(200).json(books);
};

public_users.get('/',function (req, res) {
  return getAllBooksHandler(req, res);
});

public_users.get('/books',function (req, res) {
  return getAllBooksHandler(req, res);
});

// Get book details based on ISBN
const getBookByIsbnHandler = (req, res) => {
  const { isbn } = req.params;
  const book = books[isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.status(200).json(book);
};

public_users.get('/isbn/:isbn',function (req, res) {
  return getBookByIsbnHandler(req, res);
});

public_users.get('/books/isbn/:isbn',function (req, res) {
  return getBookByIsbnHandler(req, res);
 });
  
// Get book details based on author
const getBooksByAuthorHandler = (req, res) => {
  const { author } = req.params;
  const matches = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );

  return res.status(200).json(matches);
};

public_users.get('/author/:author',function (req, res) {
  return getBooksByAuthorHandler(req, res);
});

public_users.get('/books/author/:author',function (req, res) {
  return getBooksByAuthorHandler(req, res);
});

// Get all books based on title
const getBooksByTitleHandler = (req, res) => {
  const { title } = req.params;
  const matches = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  return res.status(200).json(matches);
};

public_users.get('/title/:title',function (req, res) {
  return getBooksByTitleHandler(req, res);
});

public_users.get('/books/title/:title',function (req, res) {
  return getBooksByTitleHandler(req, res);
});

//  Get book review
const getBookReviewHandler = (req, res) => {
  const { isbn } = req.params;
  const book = books[isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.status(200).json(book.reviews);
};

public_users.get('/review/:isbn',function (req, res) {
  return getBookReviewHandler(req, res);
});

public_users.get('/books/review/:isbn',function (req, res) {
  return getBookReviewHandler(req, res);
});

module.exports.general = public_users;

// Task 11: Axios-based client helpers (async/await)
const axios = require("axios");

const getAllBooks = async () => {
  const response = await axios.get("http://localhost:5000/books");
  return response.data;
};

const getBookByISBN = async (isbn) => {
  const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
  return response.data;
};

const getBooksByAuthor = async (author) => {
  const response = await axios.get(
    `http://localhost:5000/books/author/${encodeURIComponent(author)}`
  );
  return response.data;
};

const getBooksByTitle = async (title) => {
  const response = await axios.get(
    `http://localhost:5000/books/title/${encodeURIComponent(title)}`
  );
  return response.data;
};

module.exports.getAllBooks = getAllBooks;
module.exports.getBookByISBN = getBookByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
