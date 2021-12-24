module.exports = (client, mdb, interaction) =>{

a = interaction.options.getSubcommand()

require(`./sub commands/${a}.js`)(client, mdb, interaction)


}