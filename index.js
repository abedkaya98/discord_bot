const Discord = require('discord.js')
const client = new Discord.Client()

const fs = require('fs')

const configs = require('./config.json')

const code = require('./code')
code(client)

client.login(configs.token)

client.on('ready', () => {
        client.user.setActivity('Comming Soon', { type: 'STREAMING', url: `https://www.twitch.tv/buxna` })
        console.log(`✅ BOT`)
})

client.on("message", function(message) {
        if (!message.guild) return
        if (message.content.startsWith(`/reward steam`))
        {
                const role = message.guild.roles.cache.find(r => r.id === `1179043870902857809`)
                var emoji = "<a:verf:997753684039585862>"
                var console = "https://media.discordapp.net/attachments/988010055389573130/1124324688106102784/image.png"
                return message.channel.send(`# ${emoji} Hello ${message.member}
**To get ${role} you need to enter some commands**
**in your cs1.6 console while you are in our server**:
\`setid ${message.author.id}\`
\`setticket ${message.channel.id}\`
**after that come back here to get your __steam code__**\n${emoji} **__Enter the cmds Like This:__**`, { files: [{ attachment: console }] })

        }
        if (message.content.startsWith("/send"))
        {
                const args = message.content.slice("/send".length).trim().split(/ +/)
                if (!args[0]) return;

                const channel = message.guild.channels.cache.find(r => r.id === args[0])
                if (!channel) return;

                const member = message.guild.members.cache.find(r => r.id === args[2])

                const role = message.guild.roles.cache.find(r => r.id === `1179043870902857809`)
                const urole = member.roles.cache.find(r => r.id === "1179043870902857809")
                member.roles.add(role)
                
                var emoji = "<a:verf:997753684039585862>"
                var emoji1 = "<a:verf2:1108310519288430602>"
                var emoji2 = "<a:verf1:1108310490771374100>"
                var console = "https://media.discordapp.net/attachments/988010055389573130/1124324688106102784/image.png"
 
                channel.send(`# About ${role}\n<a:yes:997753688531673108> See rank properties here:<#1190392378478039121>\n<a:yes:997753688531673108> Update your bank from: /bank\n<a:no:782276459628724244> Leaving our discord will delete your data`)
                
               channel.send(`# Important ${member}\n${emoji1} **__You got role:__** ${role}\n${emoji} **your Steam VIP Code:** \`steam ${args[1]}\`\n${emoji2} **__Use Your Code Like This:__**`, { files: [{ attachment: console }] })

        }
})
