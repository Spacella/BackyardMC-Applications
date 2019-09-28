const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

// Bot Startup Message
client.on('ready', () => {
    console.log('-------------------------------');
    console.log("| Backyard MC Applications Bot |");
    console.log("| Up and Running! |");
    console.log("| Version 0.1 |");
    console.log("| Made by: Spacella|");
    console.log("-------------------------------");
});
//When a member joins a guild (Guild isnt specified, may cause issues)
client.on("guildMemberAdd", member => {
    var server = member.guild;

    //Create a channel with members name.
    server.createChannel(member.displayName, "text");
    // Find the channel name
    const channel = client.channels.find("channelName", member.displayName);

    // Embed Defining
          const base = new Discord.RichEmbed()
          base.setTitle("Welcome to the BackyardMC Applications discord!")
          base.setColor(11044352) //What is this hex code?
          base.setDescription("Glad to know that you want to apply! React below for the position you would like to apply for. \n\n Thanks, BackyardMC Team");
          base.setImage("http://i.imgur.com/ysVpymuV.png");
          base.setTimestamp();

          // Send the embed to the channel.
      channel.send(base).then(

          console.log(`${member.user.tag} Created an application. | ${member.joinedAt.getTime} | `)
          // Extra .thens here.

          // Find any console errors (not sure if this will work.)
      ).catch(console.error(console.log()));
});
// Connect the bot to discord through the bot token.
client.login(config.token);
