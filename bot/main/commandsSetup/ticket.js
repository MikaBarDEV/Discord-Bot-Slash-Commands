module.exports = (client, mdb, commands, log) =>{

commands.create({
  name: 'ticket',
  description: 'Ticket Commands',
  type: 1,
  options: [

// Create ticket
    {
      name: 'create',
      description: 'Create a ticket',
      type: 1,
      options: [{
        name: 'type',
        description: 'The type of ticket you want to create',
        type: 3,
        required: true,
        choices: [{ name: 'Support', value: '1' },
        { name: 'Punishment Appeal', value: '2' },
        { name: 'Report User', value: '3' },
        { name: 'Report Staff', value: '4' },]
      },
      
      {
        name: 'reason',
        description: 'Specify a reason',
        type: 3,
        required: true
      }]
    },


// Close ticket
    {
      name: 'close',
      description: 'close a ticket',
      type: 1,
      options: [{
        name: 'channel',
        description: 'The channel you wanna close',
        type: 7,
        required: true,
        channelTypes: ['GUILD_TEXT']
      },
      
      {
        name: 'reason',
        description: 'Specify a reason',
        type: 3,
        required: true
      }]
    },
  
  
]
  
}).then(c => { log(c) })










}