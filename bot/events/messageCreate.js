module.exports = (client, mdb, message) =>{
if(message.author.bot) return


console.log(`Message send by: ${message.author.tag}, content: ${message.content}`)

const guild = client.guilds.cache.get(mdb.env.testingGuild)

if(!guild) commands = client.application.commands
else commands = guild.commands

// commands.delete(message.content)

}