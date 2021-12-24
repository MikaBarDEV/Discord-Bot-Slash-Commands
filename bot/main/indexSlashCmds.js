module.exports = (client, mdb) =>{

console.log('Indexing Slashcommands -> fetching guild')
const guild = client.guilds.cache.get(mdb.env.testingGuild)

if(!guild) commands = client.application.commands
else commands = guild.commands

// guild.commands.set([]).then(console.log).catch(console.error);

mdb.fs.writeFileSync('./database/CLIENT/currectCommands.txt', '')

function log(c){
  mdb.fs.appendFileSync(`./database/CLIENT/currectCommands.txt`, `\n${c.id} || ${c.name}`)
  console.log(`Indexing Slashcommands -> \'${c.name}\' done`)
}

console.log('Indexing Slashcommands -> Started Indexing\n')


folder = '/home/runner/Discord-Bot-Slash-Commands/bot/main/commandsSetup/'
const files = mdb.fs.readdirSync(folder)
files.forEach(f => {
  require(`./commandsSetup/${f}`)(client, mdb, commands, log)
})


}