const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// Render the flights index page
router.get('/', async (req, res) => {
    try {
        const flights = await Flight.find({});
        res.render('flights/index', { flights, title: 'Flights List', body: '' });
    } catch (err) {
        console.error('Error fetching flights:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Render the new flight form
router.get('/new', (req, res) => {
    res.render('flights/new', { title: 'New Flight' });
});

// Handle the creation of a new flight
router.post('/', async (req, res) => {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.error('Adding new flight error: ', err);
        res.status(500).send('Error adding new flight');
    }
});

// Render flight details
router.get('/:id', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id).populate('destinations');
        res.render('flights/show', { title: 'Flight Details', flight, body: '' });
    } catch (err) {
        console.error('Error fetching flight details:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Show form to add a new destination
router.get('/:id/destinations/new', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('destinations/new', { title: 'Add Destination', flight, body: '' });
    } catch (err) {
        console.error('Error fetching flight details for adding destination:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Add a new destination
router.post('/:id/destinations', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        flight.destinations.push(req.body);
        await flight.save();
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        console.error('Error adding new destination:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
