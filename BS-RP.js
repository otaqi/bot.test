const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NzE0NDMyMTc1ODk3OTY4NjQx.XsulBA.GUNhhB2s5_FVGm_lkzQqfXcC4Ow');