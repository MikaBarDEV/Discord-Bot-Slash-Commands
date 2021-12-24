module.exports = () =>{

// Declare an empty array
mdb = [];
mdb.env = []

// Custom Stuff
mdb.env.testingGuild = '923840432214011904'
// mdb.auth = require('./funcs/permsCheck.js')

// Basic Packages
mdb.fs = require('fs')
mdb.Discord = require('discord.js')
mdb.os = require("os");

// Successful execution
console.log(`MDB Function Initialized`)
return mdb

}