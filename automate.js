const dbURI = process.env.DB_URI || 'mongodb://localhost';
const express = require('express');
const cors = require('cors');
const db = require('./models/db')
const Item = require('./models/items');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const test= require('./tests/server.test.js')
// Start the process
test;