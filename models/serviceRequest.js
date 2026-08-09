const mongoose = require('mongoose')

const serviceRequestSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  hero: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hero',
    required: true
  },

  requestType: {
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

  requestedDate: {
    type: Date
  },

  status: {
    type: String,
    default: 'Submitted'
  }
}, {timestamps: true})

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema)