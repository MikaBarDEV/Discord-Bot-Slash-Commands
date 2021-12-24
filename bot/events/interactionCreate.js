module.exports = (client, mdb, interaction) =>{

if(interaction.isCommand()){
console.log(`Interaction Created By: ${interaction.user.tag}, command: ${interaction.commandName}`)


cmdFolder = '/home/runner/Discord-Bot-Slash-Commands/bot/commands'
dirs = ['tier_4|owner', 'tier_3|admin', 'tier_2|devs', 'tier_1|helpers', 'fun', 'main']

dirs.forEach(f => {
if (mdb.fs.existsSync(`${cmdFolder}/${f}/${interaction.commandName}.js`)) {
  require(`../commands/${f}/${interaction.commandName}.js`)(client, mdb, interaction)
}
})

}












}