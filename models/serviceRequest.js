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
    required: true,
    enum: [
      'Emergency Response',
      'VIP Escort',
      'Event Appearance',
      'Investigation',
      'Search and Rescue',
      'Disaster Assistance',
      'Security Support',
      'Other'
    ]
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
     enum: [
    'Submitted',
    'Approved',
    'In Progress',
    'Completed',
    'Cancelled'
  ],
    default: 'Submitted'
  }
}, {timestamps: true})

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema)

module.exports = ServiceRequest