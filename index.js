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
app.use(express.urlencoded({ extended: false }));


// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))