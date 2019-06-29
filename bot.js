require('newrelic');
const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

var input
var i
var result = ''
client.on('message', message => {
  if (message.content.startsWith('@@')) {
    if (!Number.isNaN(message.content.split('@@')[1]) && parseInt(message.content.split('@@')[1]) <= 300) {
      input = (+(message.content.split('@@')[1])).toString(2)
      for(i = 0; i < 8-input.length; i++){
				result += '0'
			}
			result += input
			result = result.slice(0,4) + ' ' + result.slice(4,8)
      message.channel.send('```css\n ' + result + '```')
			input = ''
			result = ''
    }
    else {
      message.channel.send('```css\n WTF```')
    }
  }
})

client.login(process.env.BOT_TOKEN)
