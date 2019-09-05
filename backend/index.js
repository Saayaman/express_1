const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.get('/api', (req, res) =>
  res.send('<h1>hello world</h1>')
)

// app.get('/', (req, res) => 
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// );

//Set Static Folder
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.urlencoded({ extended: false }));


// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))