const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');

client.once('ready', () => {
	console.log(chalk.yellow('-------------------------------\n| Backyard MC Applications Bot |\n| Up and Running!              |\n| Version 0.1                  |\n| Made by: Spacella            |\n-------------------------------\n'));
});

client.on("guildMemberAdd" , member => {
    var server = member.guild;

    server.createChannel(member.displayName, "text")
    const channel = client.channels.find("channelName", member.displayName)
          const base = new Discord.RichEmbed()
          .setTitle("Welcome to the BackyardMC Applications discord!")
          .setColor(11044352)
          .setDescription("Glad to know that you want to apply! React below for the position you would like to apply for. \n\n Thanks, BackyardMC Team")
          .setImage("http://i.imgur.com/ysVpymuV.png")
          .setTimestamp()
      channel.send({base})
      .then(console.log(chalk.magenta(member.displayName + ' application created.')))
      .catch(console.error);
});

client.login(config.token);