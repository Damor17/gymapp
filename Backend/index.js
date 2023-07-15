
const corsOptions = require('./config/corsOptions')
const express = require('express')
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.js')

const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config()


app.use(cors())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:19000");
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')

})

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
