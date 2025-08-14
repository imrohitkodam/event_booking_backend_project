const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String, // you can store image URL or filename
  },
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

module.exports = mongoose.model("Event", eventSchema);
