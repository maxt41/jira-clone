const express = require('express');
const router = express.Router();
const Ticket = require('../../models/Ticket')

router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find().limit(5).sort('-date')
        if(!tickets) {
            return res.status(400).json({msg : 'Ticket Not Found'})     
        }
        return res.status(200).json(tickets)
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: 'An Error Occured'})
    }
})

module.exports = router;