const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const orderRoute = require('./routes/order.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(productRoute);
app.use(orderRoute);

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Basic E-Commerce API!",
    endpoints: {
      users: {
        list: "GET /users",
        create: "POST /users (JSON body: { name, email })"
      },
      products: {
        list: "GET /products",
        create: "POST /products (JSON body: { name, price })"
      },
      orders: {
        list: "GET /orders",
        create: "POST /orders (JSON body: { userId, items: [{ productId, quantity }] })"
      }
    }
  });
});

module.exports = app;
