const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

//display flights w error
//not displaying correctly 
//troubleshoot
router.get('/', async (req, res) => {
    try {
      const flights = await Flight.find({});
      res.render('flights/index', { title: 'Flights List', flights });
    } catch (err) {
      console.error('Error fetching flights:', err);
      res.status(500).send('Internal Server Error');
    }
  });

//adding flight formu
router.get('/new', (req, res) => {
    res.render('flights/new', {title:'New Flight'});
  });

//new flight handle
router.post('/', async (req, res) => {
    try {
      await Flight.create(req.body);
      res.redirect('/flights');
    } catch (err) {
        console.error('Adding new flight error: ', err);
        res.status(500).send('Error found');
    }
});

//export
module.exports = router;