const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  // Log successful connection
db.once('open', () => {
    console.log('Connected to the database');
  });
  
  // Log connection errors
  db.on('error', (err) => {
    console.error('Database connection error:', err);
  });
  
  module.exports = db;

