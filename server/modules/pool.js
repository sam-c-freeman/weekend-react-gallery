// Node Module that will connect to postgesql
const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    config = {
      // We use the DATABASE_URL from Heroku to connect to our DB
      connectionString: process.env.DATABASE_URL,
      // Heroku also requires this special `ssl` config
      ssl: { rejectUnauthorized: false },
    };
  } else {
    // If we're not on heroku, configure PG to use our local database
    config = {
      host: 'localhost',
      port: 5432,
      database: 'react_gallery', // CHANGE THIS LINE to match your local database name!
    };
  }
  

// Setup PG to connect to the database
const pool = new pg.Pool(config);

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

// var pool = require('../modules/pool.js');

module.exports = pool;