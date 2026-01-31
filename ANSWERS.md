## Question 1 (githubrepo)

curl -s https://api.github.com/repos/le0nardomartins/expressBookReviews | jq '{fork: .fork, parent: {full_name: .parent.full_name}}'
{
  "fork": true,
  "parent": {
    "full_name": "ibm-developer-skills-network/expressBookReviews"
  }
}


## Question 2 (getallbooks)

curl -s http://localhost:5000/books
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}


## Question 3 (getbooksbyISBN)

curl -s "http://localhost:5000/books/isbn/1"
{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}


## Question 4 (getbooksbyauthor)

curl -s "http://localhost:5000/books/author/Chinua%20Achebe"
[{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}]


## Question 5 (getbooksbytitle)

curl -s "http://localhost:5000/books/title/Things%20Fall%20Apart"
[{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}]


## Question 6 (getbookreview)

curl -s "http://localhost:5000/books/review/1"
{}


## Question 7 (register)

curl -s -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"user_test\",\"password\":\"12345\"}"
  {"message":"User registered successfully"}


## Question 8 (login)

curl -s -X POST http://localhost:5000/login -H "Content-Type: application/json" -d "{\"username\":\"user_test\",\"password\":\"12345\"}"
  {"message":"Login successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakepayload.signature"}


## Question 9 (reviewadded)

curl -s -X PUT "http://localhost:5000/review/1" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakepayload.signature" -d "{\"review\":\"Muito bom\"}"
{"message":"Review added/updated successfully","reviews":{"user_test":"Muito bom"}}


## Question 10 (deletereview)

curl -s -X DELETE "http://localhost:5000/review/1" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakepayload.signature"
{"message":"Review deleted successfully","reviews":{}}


## Question 11 (general.js link)

https://github.com/le0nardomartins/expressBookReviews/blob/main/final_project/router/general.js