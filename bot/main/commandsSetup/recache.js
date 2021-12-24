module.exports = (client, mdb, commands, log) =>{

commands.create({
  name: 'manage',
  description: 'Manage the slashcommands',
  options: [
    {
      name: 'command',
      description: 'Specify the function here',
      type: 3,
      required: true,
      choices: [
        {name: 'Recache', value: 'recache'},
        {name: 'Delete', value: 'delete'}
      ]
    },

    {
      name: 'ID',
      description: 'Specify a specific ID',
      type: 10,
      choices: [
        {name: 'Recache', value: 'recache'},
        {name: 'Delete', value: 'delete'}
      ]
    }
  ]
}).then(c => { log(c) })

}