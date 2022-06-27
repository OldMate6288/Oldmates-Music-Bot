module.exports = {
    name: 'info',
    description: "this is an info command",
    async execute(client, message, args){
        message.channel.send('OLDMATES MUSIC BOT v1.0.1, Please message OldMate#6288 if you encounter any issues!');
    }
}