const { saludo, Uwu } = require('./Options') 

function commands(client) {
    client.on('chat', (target, ctx, message, self) => {
        if(self) return;
        for(let i = 0; i < saludo.length; i++) {
            if(message.startsWith(saludo[i])) {
                client.say(target, `Welcome ${ctx.username} <3`);
            }
        }
            if(message === 'nice') {
                client.say(target, `Nice BloodTrail `);
        }

        for(let i = 0; i < Uwu.length; i++) {
            if(message.startsWith(Uwu[i])) {
                client.say(target, `⎝⎠ ╲╱╲╱ ⎝⎠`);
            }
        }

        if(message == 'ez') {
            client.say(target, `░░░░░█▀▀▀░█▀▀█░█▀▀▀░█░█░░░░░░ ░░░░░█▀▀░░█▀▀█░▀▀▀█░▀█▀░░░░░░ ░░░░░▀▀▀▀░▀░░▀░▀▀▀▀░░▀░░░░░░░ ░░█▀▀█░█▀▀▀░▀▀█▀▀░█▀▀▀░█▀▀▀░░ ░░█▀▀▀░█▀▀░░░░█░░░█▀▀░░▀▀▀█░░ ░░▀░░░░▀▀▀▀░░░▀░░░▀▀▀▀░▀▀▀▀░░`);
        }

        if(message == 'gg') {
            client.say(target, `░░░░░░░░░░░░░░░░░░░░░░░░░░ ░░░█▀▀▀░█▀▀█░█▀▀▀░▀░█░░░░░ ░░░█▀▀░░█▀▀█░▀▀▀█░█░█░░░░░ ░░░▀░░░░▀░░▀░▀▀▀▀░▀░▀▀▀░░░ ░░░░░░░░░░░░░░░░░░░░░░░░░░`)
        }
    });
}

module.exports = commands;