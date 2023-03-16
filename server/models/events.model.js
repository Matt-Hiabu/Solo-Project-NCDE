const mongoose = require('mongoose');
const EventsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Event name is required"],
        minLength: [3, "Event name must be at least 3 characters long"]
    },
    location: { 
        type: String, 
        required: [true, "Event Type is required"],
        minLength: [3, "Event Type must be at least 3 characters long"]
    },
    date: { 
        type: String, 
        required: [true, "Event Description is required"],
        minLength: [3, "Event Description must be at least 3 characters long"]
    },
    host: { 
        type: String, 
        required: [true, "Event Description is required"],
        minLength: [3, "Event Description must be at least 3 characters long"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Events', EventsSchema);