const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Canvas = require('canvas')
const mySecret = process.env['TOKEN']
const fs = require('fs').promises;
var prefix = ["~"]
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILDS
    ]
});


////LOGIN LOG
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//// REPLY MASSAGE
client.on("message", msg => {
  if (msg.content === ".pay" ) {
    msg.reply("https://nextpay.org/nx/store/54community");
  }
})
client.on("message", msg => {
  if (msg.content === ".shop") {
    msg.reply("Dorod Az Link Zir Mitonid Kharideton Ro Anjam Bedid");
    msg.reply(" https://nextpay.org/nx/store/54community ");
  }
})
client.on("message", msg => {
  if (msg.content === "Dorod Az Link Zir Mitonid Kharideton Ro Anjam Bedid") {
    msg.reply(" https://nextpay.org/nx/store/54community ");
  }
})

   
///// status bot

client.on("ready", () => {
    function status() {
  
      let count = 0;
      const gGuild = client.guilds.cache.get("977614218398404608")
      const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
      for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
      let go = [`54 Support`,`${gGuild.memberCount} Members`, `${gGuild.name}`, `Made by 𝐸 𝒮 𝒵#0097`]
      let plsc = ["WATCHING"]
      let Power = Math.floor(Math.random() * go.length);
  
      client.user.setActivity(go[Power], { type: plsc[Power] });
    }; setInterval(status, 5000)
  });

  const srza = require('discord.js');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

client.on("ready", () => {
  function sobhan() {
        let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
        let godrat = Math.floor(Math.random() * vazyiat.length)
        client.user.setPresence({
        status: vazyiat[godrat] })
  }; setInterval(sobhan, 2000)
});
process.env
///// token
client.login(process.env.TOKEN)