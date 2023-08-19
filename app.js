const express = require('express')
const productRoute = require('./route/product')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 9000

mongoose.connect('mongodb+srv://abedallasbeata:l4cENYvwTlZ0GO8U@cluster0.t2n5jw1.mongodb.net/ecommerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})
.then(() => {
  console.log('Connected to the database successfully');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});

app.use([bodyParser.urlencoded({extended: true}), express.json()])
app.use(cors())
app.use('/products', productRoute)

app.listen(port, () => {
    console.log('Working on port 9000')
})
module.exports = app