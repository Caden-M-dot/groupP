const mongoose = require('mongoose');

// Define the Item schema
const itemSchema = new mongoose.Schema({
  storeID: {
    type: String,
    required: true,
    trim: true
  },
  storeName: {
    type: String,
    default: null
  },
  productID: {
    type: String,
    default: null,
    required: true
  },
  productName: {
    type: String,
    default: null
  },
  price: {
    type: String,
    default: null
  }
}, {
  timestamps: true // adds createdAt and updatedAt automatically
});

// Export the Mongoose model
module.exports = mongoose.model('Item', itemSchema);