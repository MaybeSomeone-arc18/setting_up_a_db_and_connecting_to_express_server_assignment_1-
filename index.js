require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3010;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to database'))
.catch(err => console.error(`Error connecting to database: ${err.message}`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
