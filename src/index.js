const tmi = require('tmi.js');
const commands = require('./commands/Commands');
const prefixCommands = require('./commands/prefixCommands');
const options = require('./config/options.json');
const events = require('./events/Events');
const client = new tmi.Client(options);

client.connect();

//Events
events(client);

//Commands
commands(client);
prefixCommands(client);
