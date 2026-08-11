const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  content: {
    type: String,
    required: true
  },
  backgroundVideo: {
  type: String
},

detailMedia: {
  type: String
},
}, {
  timestamps: true
})

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  biography: {
    type: String,
    required: true
  },
  detailedBio: {
    type: String,
    required:true
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
  },

  reviews: [reviewSchema],

  theme: {
  type: String,
  required: true
}
}, {timestamps: true})

const Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero