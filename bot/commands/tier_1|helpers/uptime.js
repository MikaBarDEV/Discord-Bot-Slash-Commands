module.exports = (client, mdb, interaction) =>{

const ping = Date.now() - interaction.createdTimestamp

const miliseconds = client.uptime
const date = new Date(miliseconds);
const uptime = date.getUTCHours()+" hours, "+date.getUTCMinutes()+" minutes and "+date.getUTCSeconds()+" second(s)";

const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle('Uptime:')
.setDescription(`I'm now online for: \`${uptime}\`. \n And my current is ping: \`${ping} ms\` `)
.setTimestamp()



interaction.reply({
  embeds: [embed],
  ephemeral: true,
})

}