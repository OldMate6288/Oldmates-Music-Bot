module.exports = {
    name: 'help',
    description: "this is a list of commands",
    async execute(client, message, args){
        message.channel.send('LIST OF COMMANDS');
        message.channel.send('"-play" = Play song, either insert a YT link or add your song name after the play command');
        message.channel.send('"-stop" = Stop song from playing');
        message.channel.send('"-info" = Shows version build and troubleshooting');
    }
}