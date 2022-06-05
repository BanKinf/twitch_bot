
    function onMessageHandler (channel, userstate, message, self) {
        checkTwitchChat(userstate, message, channel)
      }
      
      function onDisconnectedHandler(reason) {
        console.log(`Disconnected: ${reason}`)
      }
      
      function onConnectedHandler(address, port) {
        console.log(`Bot connected to ${address}:${port}`)
      }
      
      function onHostedHandler (channel, username, viewers, autohost) {
        client.say(channel,
          `Thank you @${username} for the host of ${viewers}!`
        )
      }
      
      function onRaidedHandler(channel, username, viewers) {
        client.say(channel,
          `Thank you @${username} for the raid of ${viewers}!`
        )
      }
      
      function onSubscriptionHandler(channel, username, method, message, userstate) {
        client.say(channel,
          `Thank you @${username} for subscribing!`
        )
      }
      
      function onCheerHandler(channel, userstate, message)  {
        client.say(channel,
          `Thank you @${userstate.username} for the ${userstate.bits} bits!`
        )
      }
      
      function onGiftPaidUpgradeHandler(channel, username, sender, userstate) {
        client.say(channel,
          `Thank you @${username} for continuing your gifted sub!`
        )
      }
      
      function onHostingHandler(channel, target, viewers) {
        client.say(channel,
          `We are now hosting ${target} with ${viewers} viewers!`
        )
      }
      
      function reconnectHandler () {
        console.log('Reconnecting...')
      }
      
      function resubHandler(channel, username, months, message, userstate, methods) {
        const cumulativeMonths = userstate['msg-param-cumulative-months']
        client.say(channel,
          `Thank you @${username} for the ${cumulativeMonths} sub!`
        )
      }
      
      function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate) {
      
        client.say(channel,
          `Thank you @${username} for gifting a sub to ${recipient}}.`
        )
      
        // this comes back as a boolean from twitch, disabling for now
        // "msg-param-sender-count": false
        // const senderCount =  ~~userstate["msg-param-sender-count"];
        // client.say(channel,
        //   `${username} has gifted ${senderCount} subs!`
        // )
      }


module.exports = {
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
    subGiftHandler
}