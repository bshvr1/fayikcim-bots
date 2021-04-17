const Discord = require('discord.js');
const mongoose = require('mongoose');

const fs = require('fs');

const client = global.client = new Discord.Client({fetchAllMembers: true});
client.moment = global.moment = require('moment');

client.moment.locale("tr");
global.moment.locale("tr");

const RoleData = require('./models/Role.js');
const ChannelData = require('./models/Channel.js');

////////////-------------------////////////

client.config = global.config = {
    prefix: "!",
    prefix2: "f!",
    prefix3: "a!",
    prefix4: "!!",
    prefix5: "f!!",
    prefix6: "a!!",

    status1: "dnd",
    status2: "invisible",
    footer: "Fayikcim ❤️ Awoken", 
    botdurum: "Fayikcim ❤️ Awoken",
    botdurum2: "Fayikcim System",
    owners: ["355742603691687937", "622808887728406539"],

    guild: "760939097178767422",
    voiceChannel: "804798065458413569",
    logChannel: "805141999913140286", 

    token: "ODA0ODIyNjA3MDczNTA5Mzc2.YBR7dg.k1PGXlZJtFJfv763yFKK9JyFIe8",
    token2: "ODE2MjM0MTgyOTQxMzQzNzU2.YD3_Ug.aewRCesfiO864oimnV-95aqv46k",
    token3: "ODE2MjM0NTgyNjAwNTgxMTUw.YD3_sQ.W8Wtmz0c8uv57UXBJyDa1jKrYsE",
    token4: "ODE2MjM1MDI0MjU2OTkxMjUz.YD4AGg.tbmoio0HpewyVAYAo4rw4tPoZ2A",
    token5: "ODE2MjM1Mjc4NjEwOTg5MDc4.YD4AVw.N1hz06Y-fKoMtueeae25glc0ctk",
    token6: "ODE2MjM1NDE5OTEzMjg5NzMw.YD4AeQ.JUstbOCCI1etdgOV0mFVPgu4oAg",

};

mongoose.connect( "" , { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if(err) return console.log("Veri tabanı bağlantısı kurulamadı!");
    console.log("Veri tabanı bağlantısı kuruldu!");
});

////////////////////

client.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database I Komutlar Yüklendi!`)
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
    fs.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (client.config.owners.includes(message.author.id)) permlvl = 5;
    return permlvl;
  };
})

client.on("message", async (message) => {
  let client = message.client;
  let prefix = client.config.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})

////////////-------------------////////////

const fs2 = require('fs');
//const { config } = require('process');

const client2 = global.client2 = new Discord.Client({fetchAllMembers: true});
client2.moment = global.moment = require('moment');

client2.moment.locale("tr");
global.moment.locale("tr");

// --- COMMAND HANDLER --- //

client2.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database II Komutlar Yüklendi!`)
  client2.commands = new Discord.Collection();
  client2.aliases = new Discord.Collection();
  
    fs2.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client2.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client2.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client2.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (global.config.owners.includes(message.author.id)) permlvl = 5;
    return permlvl;
  };
})

client2.on("message", async (message) => {
  let client2 = message.client;
  let prefix = global.config.prefix2;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client2.elevation(message);
  let cmd;
  if (client2.commands.has(command)) {
    cmd = client2.commands.get(command);
  } else if (client2.aliases.has(command)) {
    cmd = client2.commands.get(client2.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client2, message, params, perms);
  }
})

////////////-------------------////////////

const fs3 = require('fs');
//const { config } = require('process');

const client3 = global.client3 = new Discord.Client({fetchAllMembers: true});
client3.moment = global.moment = require('moment');

client3.moment.locale("tr");
global.moment.locale("tr");

// --- COMMAND HANDLER --- //

client3.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database III Komutlar Yüklendi!`)
  client3.commands = new Discord.Collection();
  client3.aliases = new Discord.Collection();
  
    fs3.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client3.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client3.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client3.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (global.config.owners.includes(message.author.id)) permlvl = 5;
    return permlvl;
  };
})

client3.on("message", async (message) => {
  let client3 = message.client;
  let prefix = global.config.prefix3;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client3.elevation(message);
  let cmd;
  if (client3.commands.has(command)) {
    cmd = client3.commands.get(command);
  } else if (client3.aliases.has(command)) {
    cmd = client3.commands.get(client3.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client3, message, params, perms);
  }
})

////////////-------------------////////////

const fs4 = require('fs');
//const { config } = require('process');

const client4 = global.client4 = new Discord.Client({fetchAllMembers: true});
client4.moment = global.moment = require('moment');

client4.moment.locale("tr");
global.moment.locale("tr");

// --- COMMAND HANDLER --- //

client4.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database IV Komutlar Yüklendi!`)
  client4.commands = new Discord.Collection();
  client4.aliases = new Discord.Collection();
  
    fs4.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client4.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client4.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client4.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (global.config.owners.includes(message.author.id)) permlvl = 5;
    return permlvl;
  };
})

client4.on("message", async (message) => {
  let client4 = message.client;
  let prefix = global.config.prefix4;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client4.elevation(message);
  let cmd;
  if (client4.commands.has(command)) {
    cmd = client4.commands.get(command);
  } else if (client4.aliases.has(command)) {
    cmd = client4.commands.get(client4.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client4, message, params, perms);
  }
})

////////////-------------------////////////

const fs5 = require('fs');
//const { config } = require('process');

const client5 = global.client5 = new Discord.Client({fetchAllMembers: true});
client5.moment = global.moment = require('moment');

client5.moment.locale("tr");
global.moment.locale("tr");

// --- COMMAND HANDLER --- //

client5.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database V Komutlar Yüklendi!`)
  client5.commands = new Discord.Collection();
  client5.aliases = new Discord.Collection();
  
    fs5.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client5.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client5.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client5.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (global.config.owners.includes(message.author.id)) permlvl = 5;
    return permlvl;
  };
})

client5.on("message", async (message) => {
  let client5 = message.client;
  let prefix = global.config.prefix5;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client5.elevation(message);
  let cmd;
  if (client5.commands.has(command)) {
    cmd = client5.commands.get(command);
  } else if (client5.aliases.has(command)) {
    cmd = client5.commands.get(client5.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client5, message, params, perms);
  }
})

////////////-------------------////////////

const fs6 = require('fs');
//const { config } = require('process');

const client6 = global.client6 = new Discord.Client({fetchAllMembers: true});
client6.moment = global.moment = require('moment');

client6.moment.locale("tr");
global.moment.locale("tr");

// --- COMMAND HANDLER --- //

client6.on("ready", () => {
  const log = message => {
    console.log(`[INFO] - ${message}`)
  };
  
  console.log(`Database VI Komutlar Yüklendi!`)
  client6.commands = new Discord.Collection();
  client6.aliases = new Discord.Collection();
  
    fs6.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      log(`⚡️ ${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`⭐️ Yüklenen komut: ${props.help.name}`);
        client6.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client6.aliases.set(alias, props.help.name);
        });
      });
    });
  
  client6.elevation = message => {
    if (!message.guild) return; // sunucu dışında komutlara cevap verilmeyecek.
    let permlvl = 0;
    if (global.config.owners.includes(message.author.id)) permlvl = 6;
    return permlvl;
  };
})

client6.on("message", async (message) => {
  let client6 = message.client;
  let prefix = global.config.prefix6;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client6.elevation(message);
  let cmd;
  if (client6.commands.has(command)) {
    cmd = client6.commands.get(command);
  } else if (client6.aliases.has(command)) {
    cmd = client6.commands.get(client6.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client6, message, params, perms);
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setRoleBackup() {
  let guild = client.guilds.cache.get(client.config.guild);
  if (guild) {
    guild.roles.cache.filter(r => r.name !== "@everyone" && !r.managed).forEach(role => {
      let roleChannelOverwrites = [];
      guild.channels.cache.filter(c => c.permissionOverwrites.has(role.id)).forEach(c => {
        let channelPerm = c.permissionOverwrites.get(role.id);
        let pushlanacak = { id: c.id, allow: channelPerm.allow.toArray(), deny: channelPerm.deny.toArray() };
        roleChannelOverwrites.push(pushlanacak);
      });

      RoleData.findOne({guildID: client.config.guild, roleID: role.id}, async (err, savedRole) => {
        if (!savedRole) {
          let newRoleSchema = new RoleData({
            _id: new mongoose.Types.ObjectId(),
            guildID: client.config.guild,
            roleID: role.id,
            name: role.name,
            color: role.hexColor,
            hoist: role.hoist,
            position: role.position,
            permissions: role.permissions,
            mentionable: role.mentionable,
            time: Date.now(),
            members: role.members.map(m => m.id),
            channelOverwrites: roleChannelOverwrites
          });
          newRoleSchema.save();
        } else {
          savedRole.name = role.name;
          savedRole.color = role.hexColor;
          savedRole.hoist = role.hoist;
          savedRole.position = role.position;
          savedRole.permissions = role.permissions;
          savedRole.mentionable = role.mentionable;
          savedRole.time = Date.now();
          savedRole.members = role.members.map(m => m.id);
          savedRole.channelOverwrites = roleChannelOverwrites;
          savedRole.save();
        };
      });
    });

    RoleData.find({guildID: client.config.guild}).sort().exec((err, roles) => {
      roles.filter(r => !guild.roles.cache.has(r.roleID) && Date.now()-r.time > 1000*60*60*24*3).forEach(r => {//1 saatte bir alır. Süreyi değiştirebilirsiinz.
        RoleData.findOneAndDelete({roleID: r.roleID});
      });
    });
    console.log(`[${client.moment(Date.now()).format("L")}] Rol veri tabanı düzenlendi!`);
  };
};

// --- KANAL BACKUP FONKSIYONU --- //

function setChannelBackup() {
  let guild = client.guilds.cache.get(client.config.guild);
  if (guild) {
    guild.channels.cache.filter(kanal => kanal.deleted !== true).forEach(channel => {
      let permissionss = {};
      let sayi = Number(0);
      channel.permissionOverwrites.forEach((perm) => {
        let thisPermOverwrites = {};
        perm.allow.toArray().forEach(p => {
          thisPermOverwrites[p] = true;
        });
        perm.deny.toArray().forEach(p => {
          thisPermOverwrites[p] = false;
        });
        permissionss[sayi] = {permission: perm.id == null ? guild.id : perm.id, thisPermOverwrites};
        sayi++;
      })

      ChannelData.findOne({guildID: client.config.guild, channelID: channel.id}, async (err, savedChannel) => {
        if (!savedChannel) {
          if(channel.type === "voice"){
            let newChannelSchema = new ChannelData({
              _id: new mongoose.Types.ObjectId(),
              guildID: client.config.guild,
              channelID: channel.id,
              name: channel.name,
              parentID: channel.parentID,
              position: channel.position,
              time: Date.now(),
              type: channel.type,
              permissionOverwrites: permissionss,
              userLimit: channel.userLimit,
              bitrate: channel.bitrate
            });
            newChannelSchema.save();
          }else if(channel.type === "category"){
            let newChannelSchema = new ChannelData({
              _id: new mongoose.Types.ObjectId(),
              guildID: client.config.guild,
              channelID: channel.id,
              name: channel.name,
              position: channel.position,
              time: Date.now(),
              type: channel.type,
              permissionOverwrites: permissionss,
            });
            newChannelSchema.save();
          }else {
            let newChannelSchema = new ChannelData({
              _id: new mongoose.Types.ObjectId(),
              guildID: client.config.guild,
              channelID: channel.id,
              name: channel.name,
              parentID: channel.parentID,
              position: channel.position,
              time: Date.now(),
              nsfw: channel.nsfw,
              rateLimitPerUser: channel.rateLimitPerUser,
              type: channel.type,
              topic: channel.topic ? channel.topic : "Bu kanal Backup botu tarafından kurtarıldı!",
              permissionOverwrites: permissionss,
            });
            newChannelSchema.save();
          }
        } else {
          if(channel.type === "voice"){
            savedChannel.name = channel.name;
            savedChannel.parentID = channel.parentID;
            savedChannel.position = channel.position;
            savedChannel.type = channel.type;
            savedChannel.time = Date.now();
            savedChannel.permissionOverwrites = permissionss;
            savedChannel.userLimit = channel.userLimit;
            savedChannel.bitrate = channel.bitrate;
            savedChannel.save();
          }else if(channel.type === "category"){
            savedChannel.name = channel.name;
            savedChannel.position = channel.position;
            savedChannel.type = channel.type;
            savedChannel.time = Date.now();
            savedChannel.permissionOverwrites = permissionss;
            savedChannel.save();
          }else {
            savedChannel.name = channel.name;
            savedChannel.parentID = channel.parentID;
            savedChannel.position = channel.position;
            savedChannel.nsfw = channel.nsfw;
            savedChannel.rateLimitPerUser = channel.rateLimitPerUser;
            savedChannel.type = channel.type;
            savedChannel.time = Date.now();
            savedChannel.topic = channel.topic ? channel.topic : "Bu kanal Backup botu tarafından kurtarıldı!";
            savedChannel.permissionOverwrites = permissionss;
            savedChannel.save();
          }
        };
      });
    })

    ChannelData.find({guildID: client.config.guild}).sort().exec((err, channels) => {
      channels.filter(r => !guild.channels.cache.has(r.channelID) && Date.now()-r.time > 1000*60*60*24*3).forEach(r => {//1 saatte bir alır. Süreyi değiştirebilirsiinz.
        ChannelData.findOneAndDelete({channelID: r.channelID});
      });
    });
    console.log(`[${client.moment(Date.now()).format("L")}] Kanal veri tabanı düzenlendi!`);
  };
};

////////////-------------------////////////

client.on('ready', async () => {
  client.user.setPresence({ activity: { name: global.config.botdurum }, status: global.config.status1 });

    let sesKanal = client.channels.cache.get(global.config.voiceChannel);
    if(sesKanal) sesKanal.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));

    setInterval(() => {
        setRoleBackup();
        setChannelBackup();
    }, 1000*60*60*1); // 1 saat. 1000*60*60*1
})

client2.on('ready', async () => {
  client2.user.setPresence({ activity: { name: global.config.botdurum2 }, status: global.config.status1 });
})

client3.on('ready', async () => {
  client3.user.setPresence({ activity: { name: global.config.botdurum2 }, status: global.config.status1 });
})

client4.on('ready', async () => {
  client4.user.setPresence({ activity: { name: global.config.botdurum2 }, status: global.config.status1 });
})

client5.on('ready', async () => {
  client5.user.setPresence({ activity: { name: global.config.botdurum2 }, status: global.config.status1 });
})

client6.on('ready', async () => {
  client6.user.setPresence({ activity: { name: global.config.botdurum2 }, status: global.config.status1 });
})

////////////-------------------////////////

client.login(global.config.token).then(awoken => console.log(`${client.user.username} İsmi ile giriş yapıldı! Database I Online`)).catch(err => console.log("Database I giriş yapamadı!"));
client2.login(global.config.token2).then(awoken => console.log(`${client2.user.username} İsmi ile giriş yapıldı! Database II Online`)).catch(err => console.log("Database II giriş yapamadı!"));
client3.login(global.config.token3).then(awoken => console.log(`${client3.user.username} İsmi ile giriş yapıldı! Database III Online`)).catch(err => console.log("Database III giriş yapamadı!"));
client4.login(global.config.token4).then(awoken => console.log(`${client4.user.username} İsmi ile giriş yapıldı! Database IV Online`)).catch(err => console.log("Database IV giriş yapamadı!"));
client5.login(global.config.token5).then(awoken => console.log(`${client5.user.username} İsmi ile giriş yapıldı! Database V Online`)).catch(err => console.log("Database V giriş yapamadı!"));
client6.login(global.config.token6).then(awoken => console.log(`${client6.user.username} İsmi ile giriş yapıldı! Database VI Online`)).catch(err => console.log("Database VI giriş yapamadı!"));

////////////-------------------////////////