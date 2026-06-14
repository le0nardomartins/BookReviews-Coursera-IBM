# Book Reviews - IBM Coursera Final Project

[![IBM Coursera](https://img.shields.io/badge/IBM-Coursera-1261A6?style=for-the-badge)](https://www.coursera.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-386641?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)](https://jwt.io/)
[![Axios](https://img.shields.io/badge/HTTP_Client-Axios-5A29E4?style=for-the-badge)](https://axios-http.com/)
[![License](https://img.shields.io/badge/License-Restricted-red?style=for-the-badge)](LICENSE.txt)

This is a Book Reviews API project developed exclusively for academic purposes as part of the IBM Back-End Development course on Coursera.

The project demonstrates a small Node.js and Express.js REST API for managing book information, user registration, authentication, and book reviews. It includes public routes for searching books and protected routes for authenticated users to add, update, and delete reviews.

## Author

**Leonardo Martins**

[Website](https://www.leonardomartins.dev/)
[LinkedIn](https://www.linkedin.com/in/leonardomartinscunha/)
[GitHub](https://github.com/le0nardomartins)

## Project Overview

The Book Reviews project is a back-end application built with Node.js and Express.js.

It allows users to:

* View all available books
* Search books by ISBN
* Search books by author
* Search books by title
* View book reviews
* Register a new user
* Log in with authentication
* Add or update a book review
* Delete an existing review

The application uses JSON Web Tokens and session-based authorization to protect review-related routes.

## Project Structure

```text
.
├── final_project/              # Main Node.js API project
│   ├── index.js                # Express server configuration and route setup
│   ├── package.json            # npm scripts and project dependencies
│   └── router/                 # API route modules and book database
│       ├── auth_users.js       # Authenticated user routes and review actions
│       ├── booksdb.js          # In-memory book database
│       └── general.js          # Public book search and registration routes
├── README.md                   # Project documentation
└── LICENSE.txt                 # Restricted academic license
```

## Getting Started

Follow these steps to run the project locally.

## Prerequisites

[Node.js](https://nodejs.org/) v18 or higher is recommended.

npm is included with Node.js.

## Installation

Clone the repository or download the ZIP:

```bash
git clone https://github.com/le0nardomartins/BookReviews-Coursera-IBM.git
```

Navigate to the project folder:

```bash
cd BookReviews-Coursera-IBM/final_project
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the local development server:

```bash
npm start
```

The API will be available at:

```text
http://localhost:5000
```

## API Endpoints

## Public Routes

### Get all books

```http
GET /
```

or:

```http
GET /books
```

### Get book by ISBN

```http
GET /isbn/:isbn
```

or:

```http
GET /books/isbn/:isbn
```

### Get books by author

```http
GET /author/:author
```

or:

```http
GET /books/author/:author
```

### Get books by title

```http
GET /title/:title
```

or:

```http
GET /books/title/:title
```

### Get reviews by ISBN

```http
GET /review/:isbn
```

or:

```http
GET /books/review/:isbn
```

### Register user

```http
POST /register
```

Example request body:

```json
{
  "username": "leonardo",
  "password": "password123"
}
```

## Authenticated Routes

### Login user

```http
POST /login
```

Example request body:

```json
{
  "username": "leonardo",
  "password": "password123"
}
```

Expected successful response includes a JWT token.

### Add or update a review

```http
PUT /review/:isbn
```

or:

```http
PUT /auth/review/:isbn
```

Example request body:

```json
{
  "review": "This is a great book."
}
```

When using Bearer authentication, send the token in the request header:

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

### Delete a review

```http
DELETE /review/:isbn
```

or:

```http
DELETE /auth/review/:isbn
```

When using Bearer authentication, send the token in the request header:

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

## Example Usage with cURL

Register a user:

```bash
curl -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"leonardo\",\"password\":\"password123\"}"
```

Login:

```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"leonardo\",\"password\":\"password123\"}"
```

Get all books:

```bash
curl http://localhost:5000/books
```

Get book by ISBN:

```bash
curl http://localhost:5000/books/isbn/1
```

Add or update a review:

```bash
curl -X PUT http://localhost:5000/review/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d "{\"review\":\"This book is very interesting.\"}"
```

Delete a review:

```bash
curl -X DELETE http://localhost:5000/review/1 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Running Tests

This project does not currently include automated tests.

The default npm test script is not configured for a real test suite.

```bash
npm test
```

Current expected result:

```text
Error: no test specified
```

## Technologies Used

* Node.js
* Express.js
* JavaScript
* JSON Web Token
* Express Session
* Axios
* Nodemon
* Git
* GitHub

## Coursera Submission

This project was developed as part of the IBM Back-End Development course on Coursera.

It is intended to demonstrate back-end development concepts such as REST APIs, routing, user registration, authentication, authorization, and basic review management.

## License and Terms of Use

This project is under a restricted license for academic purposes. Please refer to the [LICENSE.txt](LICENSE.txt) file for more details regarding prohibited use, commercial restrictions, redistribution limitations, and academic integrity requirements.

This code may not be copied, reused, modified, submitted, or redistributed as part of Coursera assignments, final projects, academic coursework, or commercial projects.
