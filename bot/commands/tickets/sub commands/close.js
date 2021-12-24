module.exports = (client, mdb, interaction) =>{

const database = mdb.fs.readFileSync('./database/bot/ticket_channelIDs.txt').toString()

const channel = interaction.options.getChannel('channel')
const reason = interaction.options.getString('reason').toString()

const tickets = database.split('\n')

tickets.forEach(ticket => {
  ticketObj = ticket.split()

  if(ticket.includes(channel.id)){
  channel.delete({ reason: `Ticket Closing -> ${reason}` })
  database_new = database.replace(ticket, '')
  mdb.fs.writeFileSync('./database/bot/ticket_channelIDs.txt', database_new)
  }

})







}