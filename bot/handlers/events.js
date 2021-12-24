module.exports = (client, mdb) =>{
mdb.fs.appendFileSync('./database/CLIENT/debugInfo.log', `\n\nNew Exec:`)

client.on('ready', () => {
  require('../events/ready.js')(client, mdb)
})

client.on('messageCreate', (message) => {
  require('../events/messageCreate.js')(client, mdb, message)
})

client.on('interactionCreate', (interaction) => {
  require('../events/interactionCreate.js')(client, mdb, interaction)
})

// Dev Problems
client.on("debug", (info) => {
  mdb.fs.appendFileSync('./database/CLIENT/debugInfo.log', `\ndebug -> ${info}`)
});

client.on("error", (error) => {
    console.error(`client's WebSocket error -> ${error}`);
});

client.on("warn", (info) => {
  console.log(`warning -> ${info}`);
});

}