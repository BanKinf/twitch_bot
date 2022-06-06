const { PREFIX } = require("../config/const");

function prefixCommands(client) {
    client.on('chat', (target, ctx, message, self, channel) =>{
        if(self) return;
        if(message.startsWith(PREFIX)) {
            const command = message.split(' ')[0].slice(PREFIX.length);
            const args = message.split(' ').slice(1);

            if (command === 'amor') {
                 if(!args[0]) return client.action(target, `Debes especificar un usuario`);
                 function amor () {
                     const sides = 100;
                     return Math.floor(Math.random() * sides) + 1;
                 }
                 client.action(target, `Existe un ${amor()}% de amor entre ${ctx.username} y ${args} HungryPaimon `);
             } 
    
             else if (command === 'facha') {
                 function facha () {
                    const sides = 100;
                     return Math.floor(Math.random() * sides) + 1;
                 }
                 client.action(target, `${ctx.username} tiene un ${facha()}% de facha GlitchCat`);
             } 
    
             else  {
                 client.action(target, `@${ctx.username} El comando que has escrito no existe, escribe $commands para ver los comandos disponibles`);
             }
        }
    })
}

module.exports = prefixCommands;