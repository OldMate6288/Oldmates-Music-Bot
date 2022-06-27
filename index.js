//Oldmate's Music Bot v1.0.1, feel free to edit as much as you wish.
//If you want the bot to welcome new members and create roles, create a dicord role called 'Member' and uncomment the all code starting from line 24.
//Change role.name to your desired role name if you don't want to use the role 'Member'



const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'REPLACE THIS WTIH YOUR TOKEN';



const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command)
// }

// client.once('ready', () =>{
//     console.log('This bot is online!');
// });

// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('CHANGE TO YOUR CHANNEL ID').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules text channel! Also type "!help" for bot commands`)
// }); 

// client.on('message', message =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
//     if (command === 'play'){
//         client.commands.get('play').execute(message, args);
//     } else if (command === 'stop'){
//         client.commands.get('stop').execute(message, args);
//     }  else if (command == 'info'){
//         client.commands.get('info').execute(message, args);
//     } else if (command == 'help'){
//         client.commands.get('help').execute(message, args);
//     }
// });


client.login(token);