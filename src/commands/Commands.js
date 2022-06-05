const { saludo } = require('./Options') 

function commands(client) {
    client.on('chat', (target, ctx, message, self) => {
        if(self) return;
        for(let i = 0; i < saludo.length; i++) {
            if(message.startsWith(saludo[i])) {
                client.say(target, `Welcome ${ctx.username} <3`);
            }
     }});
}

module.exports = commands;