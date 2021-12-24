module.exports = (client, mdb, interaction) =>{

const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle('Ping, Pong!')
.setDescription(`🏓 - Latency is \`${Date.now() - interaction.createdTimestamp}ms\``)
.setTimestamp()

interaction.reply({
  embeds: [embed],
  ephemeral: true,
})

}