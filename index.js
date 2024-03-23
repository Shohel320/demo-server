require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5002;
const DB_URL = process.env.DB_URL

// Connect to MongoDB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res)=> {
  const user = ({ message: " this is the server page"})

  try {
    res.send(user)
  } catch (error) {
    console.error(error)
  }
  

})





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
