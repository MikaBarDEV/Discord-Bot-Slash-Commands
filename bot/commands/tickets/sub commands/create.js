module.exports = (client, mdb, interaction) =>{

const database = mdb.fs.readFileSync('./database/bot/ticket_channelIDs.txt').toString()
const channelName = interaction.user.tag
const reason = interaction.options.getString('reason')
const type = interaction.options.getString('type').toString()


if(database.includes(interaction.user.id + '|' + type)){
  return interaction.reply({
    content: ':x: - You have already a ticket open!',
    ephemeral: true,
  })
}


if(type == '1') category = '923927766825570415'
if(type == '2') category = '923939674479788113'
if(type == '3') category = '923939722101944401'
if(type == '4') category = '923939743203487825'

interaction.guild.channels.create(channelName, {
  type: 'GUILD_TEXT',
  topic: reason,
  reason: 'Ticket Created',
  parent: category,

  permissionOverwrites: [
    {
       id: interaction.guild.roles.everyone,
       deny: [mdb.Discord.Permissions.FLAGS.VIEW_CHANNEL],
    },

    {
       id: interaction.user.id,
       allow: [mdb.Discord.Permissions.FLAGS.VIEW_CHANNEL],
    },
  ],

}).then(channel => {
  channelID = channel.id

  content = `\n${channelID}|${interaction.user.id}|${type}|${Date.now()}`

  mdb.fs.appendFileSync(`./database/bot/ticket_channelIDs.txt`, content)
})







}