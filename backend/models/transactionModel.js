const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}
);

module.exports = mongoose.model('Transaction', transactionSchema);