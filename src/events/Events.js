const { 
    onMessageHandler,
    onDisconnectedHandler,
    onConnectedHandler, 
    onHostedHandler, 
    onRaidedHandler, 
    onSubscriptionHandler,
    onCheerHandler,
    onGiftPaidUpgradeHandler,
    onHostingHandler,
    reconnectHandler,
    resubHandler,
    subGiftHandler } = require('./Handlers')
    
function events (client) {
    client.on('disconnected', (reason) => {
        onDisconnectedHandler(reason)
      })
      
      client.on('connected', (address, port) => {
        onConnectedHandler(address, port)
      })
      
      client.on('hosted', (channel, username, viewers, autohost) => {
        onHostedHandler(channel, username, viewers, autohost)
      })
      
      client.on('subscription', (channel, username, method, message, userstate) => {
        onSubscriptionHandler(channel, username, method, message, userstate)
      })
      
      client.on('raided', (channel, username, viewers) => {
        onRaidedHandler(channel, username, viewers)
      })
      
      client.on('cheer', (channel, userstate, message) => {
        onCheerHandler(channel, userstate, message)
      })
      
      client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
        onGiftPaidUpgradeHandler(channel, username, sender, userstate)
      })
      
      client.on('hosting', (channel, target, viewers) => {
        onHostingHandler(channel, target, viewers)
      })
      
      client.on('reconnect', () => {
        reconnectHandler()
      })
      
      client.on('resub', (channel, username, months, message, userstate, methods) => {
        resubHandler(channel, username, months, message, userstate, methods)
      })
      
      client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
        subGiftHandler(channel, username, streakMonths, recipient, methods, userstate)
      })
      
}

module.exports = events;