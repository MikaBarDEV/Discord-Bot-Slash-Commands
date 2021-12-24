module.exports = (client, mdb, commands, log) =>{

commands.create({
  name: 'ping',
  description: 'Replies with the bot\'s ping',
}).then(c => { log(c) })


}