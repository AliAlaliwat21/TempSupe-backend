const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  biography: {
    type: String,
    required: true
  },

  powers: {
    type: [String],
    required: true
  },

  strength: {
    type: String,
    required: true
  },

  specialty: {
    type: String,
    required: true
  },

  latestSave: {
    type: String
  },

  biggestSave: {
    type: String
  },

  greatestFeat: {
    type: String
  },

  image: {
    type: String
  }
})

const Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero