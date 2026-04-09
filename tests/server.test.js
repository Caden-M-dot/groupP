import { Selector } from "testcafe";
const dbURI = process.env.DB_URI || 'mongodb://localhost'; // match the port automate.js uses
fixture('GetAllTests')
.page('http://localhost:3000')

const express = require('express');
const cors = require('cors');
const db = require('../models/db')
const Item = require('../models/items');

const app = express();
// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static('public'));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

test('MyTest', async t => {
  const b = Selector('#getAllItemsForm').find('button')
  await t.click(b)
  const res = await t.request('http://localhost:3000');
  await t.expect(res.status).eql(200);
  if(res.status =200) {
    console.log('mcra0146@algonquinlive.com - MyTest - Passed')
  }
  else console.log('mcra0146@algonquinlive.com - MyTest - Failed')
});