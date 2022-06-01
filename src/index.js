const tmi = require('tmi.js');
const env = require('dotenv').config();

const prefix = process.env.PREFIX;

const options = {
    options: {
        debug: true
    },
   identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
   },
    channels: [process.env.CHANNEL_NAME] 
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(process.env.CHANNEL_NAME, `Bot Connected` );
})

client.on('chat', (target, ctx, message, self) => {
    if(self) return;
    if(message.startsWith(prefix)) {
        const command = message.split(' ')[0].slice(prefix.length);
        const args = message.split(' ').slice(1);
        if(command === 'ping') {
            client.action(process.env.CHANNEL_NAME, `Pong!`);
        } else if(command === 'help') {
            client.action(process.env.CHANNEL_NAME, `Commands: ping, help`);
        } else if (command === 'amor') {
            if(!args[0]) return client.action(process.env.CHANNEL_NAME, `Debes especificar un usuario`);
            function amor () {
                const sides = 100;
                return Math.floor(Math.random() * sides) + 1;
            }
            client.action(process.env.CHANNEL_NAME, `Existe un ${amor()}% de amor entre ${ctx.username} y ${args}`);
        } else if (command === 'facha') {
            function facha () {
                const sides = 100;
                return Math.floor(Math.random() * sides) + 1;
            }
            client.action(process.env.CHANNEL_NAME, `${ctx.username} tiene un ${facha()}% de facha GlitchCat`);
        } else  {
            client.action(process.env.CHANNEL_NAME, `Command not found`);
        }
    }
})

client.on('chat', (target, ctx, message, self) => {
    if(self) return;
    if(message === 'hola') {
        client.say(target, `Welcome ${ctx.username} <3`);
    }
})