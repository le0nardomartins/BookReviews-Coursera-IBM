const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use(session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const sessionToken = req.session?.authorization?.accessToken;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : sessionToken;

  if (!token) {
    return res.status(403).json({ message: "User not logged in" });
  }

  jwt.verify(token, "access", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "User not authenticated" });
    }

    req.user = user;
    return next();
  });
};

app.use("/customer/auth/*", authMiddleware);
app.use("/auth/*", authMiddleware);
app.use("/review/*", authMiddleware);
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
