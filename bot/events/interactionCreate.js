module.exports = (client, mdb, interaction) =>{

if(interaction.isCommand()){
console.log(`Interaction Created By: ${interaction.user.tag}, command: ${interaction.commandName}, ${interaction.id}`)


cmdFolder = '/home/runner/Discord-Bot-Slash-Commands/bot/commands'
dirs = [
  'admin', 
  'mods', 
  'helpers', 
  'tickets', 
  'main',
]

dirs.forEach(f => {
if (mdb.fs.existsSync(`${cmdFolder}/${f}/${interaction.commandName}.js`)) {
  require(`../commands/${f}/${interaction.commandName}.js`)(client, mdb, interaction)
}
})

}




}