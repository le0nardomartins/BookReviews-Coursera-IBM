const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
  return !!username && !users.some((user) => user.username === username);
}

const authenticatedUser = (username,password)=>{ //returns boolean
  return users.some(
    (user) => user.username === username && user.password === password
  );
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid login" });
  }

  const accessToken = jwt.sign({ username }, "access", { expiresIn: "1h" });
  req.session.authorization = { accessToken, username };
  return res.status(200).json({ message: "Login successful", token: accessToken });
});

// Add a book review
const addOrUpdateReview = (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;
  const username = req.user?.username || req.session?.authorization?.username;

  if (!username) {
    return res.status(403).json({ message: "User not logged in" });
  }

  if (!review) {
    return res.status(400).json({ message: "Review is required" });
  }

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[isbn].reviews[username] = review;
  return res.status(200).json({
    message: "Review added/updated successfully",
    reviews: books[isbn].reviews,
  });
};

regd_users.put("/auth/review/:isbn", addOrUpdateReview);
regd_users.put("/review/:isbn", addOrUpdateReview);

const deleteReview = (req, res) => {
  const { isbn } = req.params;
  const username = req.user?.username || req.session?.authorization?.username;

  if (!username) {
    return res.status(403).json({ message: "User not logged in" });
  }

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!books[isbn].reviews[username]) {
    return res.status(404).json({ message: "Review not found for this user" });
  }

  delete books[isbn].reviews[username];
  return res.status(200).json({
    message: "Review deleted successfully",
    reviews: books[isbn].reviews,
  });
};

regd_users.delete("/auth/review/:isbn", deleteReview);
regd_users.delete("/review/:isbn", deleteReview);

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
