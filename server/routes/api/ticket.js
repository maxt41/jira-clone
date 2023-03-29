const express = require('express');
const router = express.Router();
const Ticket = require('../../models/Ticket')
const { check, validationResult } = require('express-validator');
const { findByIdAndUpdate } = require('../../models/Ticket');

router.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id)
        return res.status(200).json(ticket)
    } catch (error) {
        return res.status(500).json({msg: 'An Error Occured'})
    }
})

router.post('/',   
check('summary', 'Summary is required').notEmpty(),
check('reporter', 'Reporter is required').notEmpty(),
check('initials', 'Initials are required').notEmpty(),
check('status', 'Status is required').notEmpty(),
check('type', 'Type is required').notEmpty(),
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {summary, reporter, initials, assignee, status, type} = req.body
    try {
        const ticket = new Ticket({summary, reporter, initials, assignee, status, type})
        await ticket.save()
        return res.status(200).json(ticket)
    } catch (error) {
        return res.status(500).json({msg: 'An Error Occured'})
    }
})

router.put('/:id',
check('summary', 'Summary is required').notEmpty(),
check('reporter', 'Reporter is required').notEmpty(),
check('initials', 'Initials are required').notEmpty(),
check('status', 'Status is required').notEmpty(),
check('type', 'Type is required').notEmpty(),
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {summary, reporter, initials, assignee, status, type} = req.body

    try {
        const ticket = findByIdAndUpdate(req.params.id, {summary, reporter, initials, assignee, status, type})
        await ticket.save()
        return res.status(200).json(ticket)
    } catch (error) {
        return res.status(500).json({msg: 'An Error Occured'})
    }
})


module.exports = router;