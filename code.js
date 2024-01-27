const fs = require('fs')
const { MessageEmbed } = require("discord.js")
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports = function(client) {
        const description =
        {
                name: "code",
                filename: "code.js",
                version: "1.0"
        }

        var console = "https://media.discordapp.net/attachments/988010055389573130/1124324688106102784/image.png"
        var emoji = "<a:verf:997753684039585862>"
        var names = `> **owner**: Owner role 30d + Full VIP + S-VIP + 999k ammo + 99k points
> **coowner**: Co Owner role 30d + Full VIP + S-VIP + 999k ammo + 99k points
> **boss**: Boss role 30 days + Full VIP + S-VIP + 999k ammo + 99k points
> **manager**: Manager role 30 days + Full VIP + S-VIP + 999k ammo + 99k points
> **head**: Head admin role 30 days + Full VIP + S-VIP + 150k ammo + 32k points
> **master**: Master admin role 30 days + Full VIP + S-VIP + 100k ammo + 25k points
> **elite**: Elite admin role 30 days + Full VIP + S-VIP + 75k ammo + 20k points
> **golden**: Golden admin role 30 days + Full VIP + S-VIP + 50k ammo + 15k points
> **admin**: Admin role 30 days + 40k ammo + 10 points
> **inv**: investigator role 30 days + 30k ammo + 9k points
> **all**: 30 days Full VIP + S-VIP + 100k ammo + 25k points
> **super**: 30 days S-VIP + 60k ammo + 20k points
> **full**: 30 days Full VIP + 40k ammo + 15k points
> **free**: 30 days free VIP + 20k ammo + 10k points
> **ammo**: 5k ammo
> **point**: 500 points
> **1day**: 1 day + full VIP + S-VIP + 5k ammo + 500 points
> **2day**: 2 days + full VIP + S-VIP + 6.5k ammo + 650 points
> **3day**: 3 days + full VIP + S-VIP + 7.5k ammo + 750 points
> **week**: 7 days + full VIP + S-VIP + 10k ammo + 1000 points`

        let prefix = `/code`

        client.on("message", function(message) {
                if (!message.guild) return
                if (message.content.startsWith(prefix)) {

                        const activities = [`629602024429715457`, `1159527028840726630`]
                        if (!activities.includes(message.author.id)) {
                                let user_role = message.member.roles.cache.find(r => r.id === "1180814280015228928")
                                if (!user_role) {
                                        return message.channel.send(`${emoji} **Only developer can use this command**`)
                                }
                        }
                        const args = message.content.slice(prefix.length).trim().split(/ +/)
                        if (!args[0]) return message.channel.send(`${emoji} **Type: /code help**`)

                        if (args[0] == "help")
                                return message.channel.send(`> ${emoji} **__How to know role code:__**\n> /code **role**\n> \n> ${emoji} **__How to know role name:__**\n> /code **name**\n> \n> ${emoji} **__How to use code:__**\n> > /code **use**\n> \n> ${emoji} **__How to change the code:__**\n> /code **set** role **New Code**`)

                        if (args[0] == "use")
                                return message.channel.send(`**__Use Your Code Like This:__** \n`, { files: [{ attachment: console }] })

                        if (args[0] == "name")
                                return message.channel.send(`${emoji}**__Roles name:__**\n${names}`)

                        const rewards = JSON.parse(fs.readFileSync(`./config.json`, "utf8"))

                        let Code
                        let role
                        if (message.content.includes("owner")) Code = rewards.owner, role = "owner"
                        if (message.content.includes("coowner")) Code = rewards.coowner, role = "coowner"
                        if (message.content.includes("boss")) Code = rewards.boss, role = "boss"
                        if (message.content.includes("manager")) Code = rewards.manager, role = "manager"
                        if (message.content.includes("head")) Code = rewards.head, role = "head"
                        if (message.content.includes("master")) Code = rewards.master, role = "master"
                        if (message.content.includes("elite")) Code = rewards.elite, role = "elite"
                        if (message.content.includes("golden")) Code = rewards.golden, role = "golden"
                        if (message.content.includes("admin")) Code = rewards.admin, role = "admin"
                        if (message.content.includes("inv")) Code = rewards.inv, role = "inv"
                        if (message.content.includes("all")) Code = rewards.all, role = "all"
                        if (message.content.includes("super")) Code = rewards.super, role = "super"
                        if (message.content.includes("full")) Code = rewards.full, role = "full"
                        if (message.content.includes("free")) Code = rewards.free, role = "free"
                        if (message.content.includes("ammo")) Code = rewards.ammo, role = "ammo"
                        if (message.content.includes("point")) Code = rewards.point, role = "point"
                        if (message.content.includes("1day")) Code = rewards.day1, role = "1day"
                        if (message.content.includes("2day")) Code = rewards.day2, role = "2day"
                        if (message.content.includes("3day")) Code = rewards.day3, role = "3day"
                        if (message.content.includes("week")) Code = rewards.week, role = "week"

                        if (args[0] == "set") {
                                if (!role) return message.channel.send(`${emoji} **Type: /code help**`)

                                if (!args[2]) return message.channel.send(`${emoji} **Type: /code help**`)
                                if (args[2].length < 6) return message.channel.send(`${emoji} **The code must be at least 6 characters**`)

                                const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
                                con[role] = args[2]
                                fs.writeFile(`./config.json`, JSON.stringify(con, null, 5), (err) => { if (err) console.log(err) })
                                return message.channel.send(`${emoji} **The code ${role} Updated to:** ${args[2]}`)
                        }

                        if (!role) return message.channel.send(`${emoji} **Type: /code help**`)
                        message.channel.send(`${emoji} **__Your Raward Code:__** ${Code}`)
                }
        })

}