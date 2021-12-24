module.exports = (client, mdb) =>{

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
  console.log(`debug -> ${info}`);
});

client.on("error", (error) => {
    console.error(`client's WebSocket error -> ${error}`);
});

client.on("warn", (info) => {
  console.log(`warning -> ${info}`);
});

}