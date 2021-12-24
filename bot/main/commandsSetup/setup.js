module.exports = (client, mdb, commands, log) =>{

commands.create({
  name: 'setup',
  description: 'The main setup command for your server',
  options: [
    {
      name: 'command',
      description: 'Specify one argument here, to execute a specific function',
      type: 3,
      required: true,
      choices: [
        {name: 'Prefix', value: 'premium'},
        {name: 'Premium', value: 'premium'}
      ]
    }
  ]
}).then(c => { log(c) })

}