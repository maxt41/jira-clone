
const mongoose = require('mongoose');

const TicketScheme = new mongoose.Schema({
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    reporter: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Ticket', TicketScheme);