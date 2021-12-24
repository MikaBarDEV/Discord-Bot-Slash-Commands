function hasPerms(client, Role_ID, User_ID){

var role = client.guilds.cache.get('923879800450465843').members.cache.find(u => u.id === User_ID.toString()).roles.cache.find(r => r.id === Role_ID.toString())

if(role) return true
if(!role) return false

}

module.exports = { hasPerms };