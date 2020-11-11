const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const celebSchema = new Schema (
  {
    name: {
        type: String,
        required: true
    }, 
    occupation: String, 
    catchPhrase: String
  }, {
    timestamps: true
  }
)

module.exports = model('Celebrity', celebSchema); // DEfinies Collection name!!

