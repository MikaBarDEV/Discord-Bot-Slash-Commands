module.exports = (client, mdb) =>{
console.log(`${client.user.tag} is ready`)
client.user.setActivity('me being dev\'ed', {type: 'WATCHING'});




require('../main/indexSlashCmds.js')(client, mdb)

}