const mongoose = require('mongoose')

const serviceRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  hero: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hero',
    required: true
  },

  serviceType: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  preferredDate: {
    type: Date
  },

  status: {
    type: String,
    default: 'Submitted'
  }
})

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema)