const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');

client.once('ready', () => {
	console.log(chalk.yellow('-------------------------------'));
	console.log(chalk.yellow('| Backyard MC Applications Bot |'));
	console.log(chalk.yellow('| Up and Running!              |'));
	console.log(chalk.yellow('| Version 0.1                  |'));
	console.log(chalk.yellow('| Made by: Spacella            |'));
	console.log(chalk.yellow('-------------------------------'));
	client.user.setActivity('for new applicants.', { type: 'WATCHING' });
});



    client.on("guildMemberAdd" , member => {
        var server = member.guild;

        const base = new Discord.RichEmbed()
        .setTitle("Welcome to the BackyardMC Applications discord!")
        .setColor(11044352)
        .setDescription("Glad to know that you want to apply! React below for the position you would like to apply for. \n\n Thanks, BackyardMC Team")
        .addField('Moderation Staff - v')
        .addField('Build Team - 🔨')
        .addField('Graphic Designer - 🖥️')
        .setTimestamp()
          server.createChannel(member.displayName, "").then(channel => {
              channel.overwritePermissions(server.id, {
                  VIEW_CHANNEL: false
              })
              channel.overwritePermissions(member.id, {
                 VIEW_CHANNEL: true
              })
              channel.send(base)
                    .then(console.log(chalk.magenta(member.displayName + ' application created.')))
                    .catch(console.error);
              message.react('627533909097447424');
              message.react('🔨');
              message.react('🖥️');
          })

    });

client.login(config.token);
