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
  password: { 
    type: String 
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
