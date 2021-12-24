module.exports = (client, mdb, commands, log) =>{

commands.create({
  name: 'uptime',
  description: 'Replies with the bot\'s uptime',
}).then(c => { log(c) })


}