const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    default: null 
  },
  last_name: { 
    type: String, 
    default: null 
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
  },
  passwordHash: { 
    type: String,
    required: true,
  },
  cash: { 
    type: Number, 
    default: 0 
  },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
