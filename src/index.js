const tmi = require('tmi.js');
const options = require('./config/options.json');
const events = require('./events/Events');
const client = new tmi.Client(options);
const dotenv = require('dotenv').config();
const prefix = process.env.PREFIX;

client.connect();

//Events
events(client)

