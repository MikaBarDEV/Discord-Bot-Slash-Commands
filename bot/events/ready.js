module.exports = (client, mdb) =>{
console.log(`${client.user.tag} is ready`)
client.user.setActivity('me being dev\'ed', {type: 'WATCHING'});

mdb.fs.writeFileSync('./database/currentGuilds.txt', '')
client.guilds.cache.forEach(guild => {

mdb.fs.appendFileSync('./database/currentGuilds.txt', `\n${guild.name} | ${guild.id}`)

})




require('../main/indexSlashCmds.js')(client, mdb)

}