const Discord = require("discord.js");
const ayarlar1 = require('./ayarlar.json')
const fayikik1 = require('./fayik.json')
const fayik1 = require("discord.js");
const client1 = new fayik1.Client();
const bot1 = client1;

let express1 = require('express');

client1.on("guildBanAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.cache.get(entry.executor.id);
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik1.bots.includes(entry.executor.id)) return;
  if(fayikik1.owners.includes(entry.executor.id)) return;
  if(fayikik1.guvenlid.includes(entry.executor.id)) return;
  guild.roles.cache.forEach(async function(fayik) {
  if (fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});     
  guild.members.ban(entry.executor.id, {reason: "izinsiz kullanıcı yasaklama"})
  let channel = client1.channels.cache.get(ayarlar1.log2)
   if (!channel) return console.log('Ban Koruma Logu Yok!');
   const fayik = new Discord.MessageEmbed()
   .setTimestamp()
   .setColor(ayarlar1.color)
   .setFooter(ayarlar1.footer)
   .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!**

**Yetkili Bilgisi**
**${yetkili.user.tag}** **||** **${yetkili.id}**

**Kullanıcı Bilgisi**
**${user.tag}** **||** **${user.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
   channel.send(`@everyone`, {embed: fayik})
   return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!** \n**Yasaklıyan Ve Yasaklanan Kişilerin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\`\n**Kullanıcın Adı :** \`\`${user.tag}\`\` **Kullanıcının İdsi :** \`\`${user.id}\`\``)
});

client1.on("guildMemberRemove", async kickhammer => {
  const guild = kickhammer.guild;
  const entry = await guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry.action == `MEMBER_KICK`) {
let yetkili = await guild.members.cache.get(entry.executor.id);
if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
if(fayikik1.bots.includes(entry.executor.id)) return;
if(fayikik1.owners.includes(entry.executor.id)) return;
if(fayikik1.guvenlid.includes(entry.executor.id)) return;
kickhammer.guild.roles.cache.forEach(async function(fayik) {
if (fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
fayik.setPermissions(0).catch(err =>{});}});     
kickhammer.guild.members.ban(yetkili.id, {reason: "izinsiz kullanıcı Kickleme!"})
let channel = client1.channels.cache.get(ayarlar1.log2)
if (!channel) return console.log('Kick Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar1.color)
.setFooter(ayarlar1.footer)
.setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!**
 
**Yetkili Bilgisi**
**${yetkili.user.tag}** **||**  **${yetkili.id}**
 
**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel.send(`@everyone`, {embed: fayik})
return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!** \n**Kickleyen Kişinin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\``)
}});

client1.on("guildMemberAdd", async member => {
const entry = await member.guild
 .fetchAuditLogs({ type: "BOT_ADD" })
 .then(audit => audit.entries.first());
const xd = entry.executor;
if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
if(fayikik1.bots.includes(entry.executor.id)) return;
if(fayikik1.owners.includes(entry.executor.id)) return;
if(fayikik1.guvenlid.includes(entry.executor.id)) return;
if (member.user.bot) {
member.guild.roles.cache.forEach(async function(fayik) {
if (fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
fayik.setPermissions(0).catch(err =>{});}});
member.guild.members.ban(entry.executor.id, {reason: "İzinsiz Bot Ekleme!"})
member.guild.members.ban(member.id, {reason: "Bot Koruma Sistemi!"})
let channel = client1.channels.cache.get(ayarlar1.log2)
if (!channel) return console.log('Bot Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar1.color)
.setFooter(ayarlar1.footer)
.setDescription(`
**Sunucuya İzinsiz Bot Eklendi!**
 
**Yetkili Bilgisi**
**${xd.tag}** **||** **${xd.id}**

**Botun Bilgisi**
**${member.user.tag}** **||** **${member.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
    channel.send(`@everyone`, {embed: fayik})
    return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
}});

client1.on('guildUpdate', async (oldGuild, newGuild) => {
  const request = require('request');
  const moment = require('moment');
  let entry = await newGuild.fetchAuditLogs({type: 'GUILD_UPDATE'}).then(audit => audit.entries.first());
  if(!entry.executor || entry.executor.id === client1.user.id || Date.now()-entry.createdTimestamp > 10000) return;

  moment.locale('tr');
  if(newGuild.vanityURLCode === null) return; // URL yoksa bişi yapmasın.  
  if(oldGuild.vanityURLCode === newGuild.vanityURLCode) return; // URL'ler aynıysa bişi yapmasın.                                                
  if(fayikik1.bots.includes(entry.executor.id)) return;
  if(fayikik1.owners.includes(entry.executor.id)) return;
  if(fayikik1.guvenlid.includes(entry.executor.id)) return;
  newGuild.roles.cache.forEach(async function(fayik) {
  if (fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});
  newGuild.members.ban(entry.executor.id, {reason: "URL Koruma Sistemi!"})
  let channel = client1.channels.cache.get(ayarlar1.log2)
  if (!channel) return console.log('URL Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar1.color)
  .setFooter(ayarlar1.footer)
  .setDescription(`
**Sunucu Ayarlarıyla Oynandı!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
  channel.send(`@everyone`, {embed: fayik})
  client1.users.cache.get(ayarlar1.sahip).send(`**Sunucu URL'si değiştirildi! Değiştiren kişinin bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdisi :** \`\`${entry.executor.id}\`\``)
  request({  
    method: 'PATCH',
  url: `https://discord.com/api/v8/guilds/${newGuild.id}/vanity-url`,
    body: {
      code: ayarlar1.url
    },
    json: true,
    headers: {
      "Authorization": `Bot ${ayarlar1.token}`
    }
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
  });
});

client1.on("guildUpdate", async (oldGuild, newGuild) => {
let entry = await newGuild.fetchAuditLogs({type: 'GUILD_UPDATE'}).then(audit => audit.entries.first());
if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
if(fayikik1.bots.includes(entry.executor.id)) return;
if(fayikik1.owners.includes(entry.executor.id)) return;
if(fayikik1.guvenlid.includes(entry.executor.id)) return;
if(newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
newGuild.setIcon(oldGuild.iconURL({dynamic: true, size: 2048}));
newGuild.roles.cache.forEach(async function(fayik) {
if (fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
fayik.setPermissions(0).catch(err =>{});}});
newGuild.members.ban(entry.executor.id, { reason: `Sunucuyu izinsiz güncellemek.` });
const moment = require('moment');
moment.locale('tr');
let channel = client1.channels.cache.get(ayarlar1.log2)
if (!channel) return console.log('Sunucu Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar1.color)
.setFooter(ayarlar1.footer)
.setDescription(`
**Sunucu Ayarlarıyla Oynandı!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel.send(`@everyone`, {embed: fayik})
return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucu ayarlarıyla Oynandı! Oynıyan Kişinin Bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ayarlar2 = require('./ayarlar.json')
const fayikik2 = require('./fayik.json')
const fayik2 = require("discord.js");
const client2 = new fayik2.Client();
const bot2 = client2;

let express2 = require('express');

client2.on("roleDelete", async role => {
let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
if(fayikik2.bots.includes(entry.executor.id)) return;
if(fayikik2.owners.includes(entry.executor.id)) return;
if(fayikik2.guvenlid.includes(entry.executor.id)) return;
role.guild.roles.cache.forEach(async function(fayik) {
if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
fayik.setPermissions(0).catch(err =>{});}});  
role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol silme!` });
let channel = client2.channels.cache.get(ayarlar2.log2)
if (!channel) return console.log('Rol Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar2.color)
.setFooter(ayarlar2.footer)
.setDescription(`
**Sunucuda Rol Silindi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Rol Bilgisi**
**${role.name}** **||** **${role.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel.send(`@everyone`, {embed: fayik})
return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol silindi! silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :** \`\`${role.name}\`\` **Rol İdsi :** \`\`${role.id}\`\``)
});

client2.on("roleCreate", async role => {
let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
if(fayikik2.bots.includes(entry.executor.id)) return;
if(fayikik2.owners.includes(entry.executor.id)) return;
if(fayikik2.guvenlid.includes(entry.executor.id)) return;
role.guild.roles.cache.forEach(async function(fayik) {
if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
fayik.setPermissions(0).catch(err =>{});}});  
role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol oluşturma!` });
role.delete({ reason: "Rol Koruma Sistemi" });
let channel = client2.channels.cache.get(ayarlar2.log2)
if (!channel) return console.log('Rol Açma Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar2.color)
.setFooter(ayarlar2.footer)
.setDescription(`
**Sunucuda Rol Açıldı!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel.send(`@everyone`, {embed: fayik})
return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol açıldı! açan kişinin bilgileri :** \n**Kullanıcı Adıı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
});

client2.on("roleUpdate", async (oldRole, newRole) => {
  let entry = await newRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik2.bots.includes(entry.executor.id)) return;
  if(fayikik2.owners.includes(entry.executor.id)) return;
  if(fayikik2.guvenlid.includes(entry.executor.id)) return;
  if(yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
    newRole.setPermissions(oldRole.permissions);
    newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
  };
  newRole.edit({
    name: oldRole.name,
    color: oldRole.hexColor,
    hoist: oldRole.hoist,
    permissions: oldRole.permissions,
    mentionable: oldRole.mentionable
  });
  newRole.guild.roles.cache.forEach(async function(fayik) {
  if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});  
  newRole.guild.members.ban(entry.executor.id, { reason: `İzinsiz Rol Güncelleme!` });
  let channel = client2.channels.cache.get(ayarlar2.log2)
  if (!channel) return console.log('Rol Günceleme Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar2.color)
  .setFooter(ayarlar2.footer)
  .setDescription(`
**Sunucuda Rol Güncellendi!**
 
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
 
**Rol Bilgisi**
**${oldRole.name}** **||** **${oldRole.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
  channel.send(`@everyone`, {embed: fayik})
  return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol güncellendi! Günceliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :**\`\`${oldRole.name}\`\` **Rol İdsi :** \`\`${oldRole.id}\`\``)
});

    const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
    client2.on("guildMemberUpdate", async (oldMember, newMember) => {
      if (newMember.roles.cache.size > oldMember.roles.cache.size) {
        let entry = await newMember.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
        if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
        if(fayikik2.bots.includes(entry.executor.id)) return;
        if(fayikik2.owners.includes(entry.executor.id)) return;
        if(fayikik2.guvenlid.includes(entry.executor.id)) return;
        const uyecik = newMember.guild.members.cache.get(entry.executor.id);
        if(yetkiPermleri.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
          newMember.roles.set(oldMember.roles.cache.map(r => r.id));
          uyecik.roles.set([ayarlar2.karantinarol]).catch(err => {})
          let channel = client2.channels.cache.get(ayarlar2.log2)
          if (!channel) return console.log('Rol Verme Koruma Logu Yok!');
          const fayik = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Yönetici Rolü Verildi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
         
**Kullanıcı Bilgisi**
**${newMember.user.tag}** **||** **${newMember.id}**
        
**Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
          channel.send(`@everyone`, {embed: fayik})
        };
      };
    });

client2.on("guildMemberUpdate", async (oldMember, newMember) => {
      let guild = newMember.guild;
      if(oldMember.nickname != newMember.nickname){
          let logs = await guild.fetchAuditLogs({limit: 5, type:"MEMBER_UPDATE"}).then(e => e.entries.sort((x, y) => y.createdTimestamp - x.createdTimestamp));
          let log = logs.find(e => ((Date.now() - e.createdTimestamp) / (1000)) < 5);
          if(!log) return;
          if(oldMember.user.id === log.executor.id) return
          if(fayikik2.bots.includes(log.executor.id)) return;
          if(fayikik2.owners.includes(log.executor.id)) return;
          if(fayikik2.guvenlid.includes(log.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(log.executor.id);
          uyecik.roles.set([ayarlar2.karantinarol]).catch(err => {})
    
          let channel = client3.channels.cache.get(ayarlar2.log2)
          if (!channel) return console.log('İsim Koruma Logu Yok!');
          const fayik = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
        **İzinsiz İsim Güncellendi!**
        
        **Yetkili Bilgisi**
        **${log.executor.tag}** **||** **${log.executor.id}**
        
        **Kullanıcı Bilgisi**
        **${newMember.user.tag}** **||** **${newMember.id}**
    
        **İsim Bilgisi**
        **${oldMember.nickname}** **>** **${newMember.nickname}** 
        
        **Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
          channel.send(`@everyone`, {embed: fayik})
          return;
      }
    });
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ayarlar3 = require('./ayarlar.json')
const fayikik3 = require('./fayik.json')
const fayik3 = require("discord.js");
const client3 = new fayik3.Client();
const bot3 = client3;

let express3 = require('express');

client3.on("channelDelete", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  channel.guild.roles.cache.forEach(async function(fayik) {
  if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});
  channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Silme!` });
  await channel.clone({ reason: "Kanal Korum Sistemi!" }).then(async kanal => {
  if(channel.parentID != null) await kanal.setParent(channel.parentID);
  await kanal.setPosition(channel.position);
  if(channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));});
let channel2 = client3.channels.cache.get(ayarlar3.log2)
if (!channel2) return console.log('Kanal Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar3.color)
.setFooter(ayarlar3.footer)
.setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${channel.name}** **||** **${channel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel2.send(`@everyone`, {embed: fayik})
return client3.users.cache.get(ayarlar3.sahip).send(`**Sunucuda kanal silindi! Silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Kanal Adı :**\`\`${channel.name}\`\` **Kanal İdsi :** \`\`${channel.id}\`\``)
});

client3.on("channelCreate", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  channel.guild.roles.cache.forEach(async function(fayik) {
  if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});
channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Oluşturma!` });
channel.delete({reason: "Kanal Koruma Sistemi!"});
let channel2 = client3.channels.cache.get(ayarlar3.log2)
if (!channel2) return console.log('Kanal Koruma Logu Yok!');
const fayik = new Discord.MessageEmbed()
.setTimestamp()
.setColor(ayarlar3.color)
.setFooter(ayarlar3.footer)
.setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
channel2.send(`@everyone`, {embed: fayik})
return client3.users.cache.get(ayarlar3.sahip).send(`**Sunucuda kanal oluşturuldu! oluşturan kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
});

client3.on("channelUpdate", async (oldChannel, newChannel) => {
  let entry = await newChannel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000 || !newChannel.guild.channels.cache.has(newChannel.id)) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  if(newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
  if(newChannel.type === "category") {
    newChannel.edit({ name: oldChannel.name,});
  } else if (newChannel.type === "text") {newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
  } else if (newChannel.type === "voice") {newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit, });};
  oldChannel.permissionOverwrites.forEach(perm => {let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => { thisPermOverwrites[p] = true;}); perm.deny.toArray().forEach(p => {thisPermOverwrites[p] = false; });
  newChannel.createOverwrite(perm.id, thisPermOverwrites);});
  newChannel.cache.roles.cache.forEach(async function(fayik) {
    if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
    fayik.setPermissions(0).catch(err =>{});}});
  newChannel.members.ban(member.id, { reason: `İzinsiz Kanal Güncellemek!` });
  let channel = client3.channels.cache.get(ayarlar3.log2)
  if (!channel) return console.log('Kanal Günceleme Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar3.color)
  .setFooter(ayarlar3.footer)
  .setDescription(`
**İzinsiz Kanal Güncellendi!**
  
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${oldChannel.name}** **||** **${oldChannel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
  channel.send(`@everyone`, {embed: fayik})
  return client3.users.cache.get(ayarlar3.sahip).send(`**Sunucuda kanal güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\` **Kullanıcı idsi :** \`${entry.executor.id}\`\`\n**Kanal İdsi :** \`\`${oldChannel.name}\`\` **Kanal İdsi :** \`\`${oldChannel.id}\`\``)
});

client3.on("webhookUpdate", async (channel) => {
  const entry = await channel.guild.fetchAuditLogs({type: 'WEBHOOK_CREATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  const webhooks = await channel.fetchWebhooks();
  await webhooks.map(x => x.delete({reason: "s2ş sebebiyle weebhooklar silindi!"}))
  channel.guild.members.ban(entry.executor.id, {reason: "izinsiz webhook açmak!"}).catch(err => {});
  channel.guild.roles.cache.forEach(async function(fayik) {
  if(fayik.permissions.has("ADMINISTRATOR") || fayik.permissions.has("BAN_MEMBERS") || fayik.permissions.has("MANAGE_GUILD") || fayik.permissions.has("KICK_MEMBERS") || fayik.permissions.has("MANAGE_ROLES") || fayik.permissions.has("MANAGE_CHANNELS")) {
  fayik.setPermissions(0).catch(err =>{});}});
  channel.guild.channels.cache.get(ayarlar3.log2).send(`${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
  client3.users.cache.get(ayarlar3.sahip).send(`**${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
  return;
});

client3.on("emojiDelete", async (emoji, message) => {
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
  const uyecik = emoji.guild.members.cache.get(entry.executor.id);
  uyecik.roles.set([ayarlar3.karantinarol]).catch(err => {})
  let channel = client3.channels.cache.get(ayarlar3.log2)
  if (!channel) return console.log('Emoji Silme Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar3.color)
  .setFooter(ayarlar3.footer)
  .setDescription(`
**İzinsiz Emoji Silindi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${emoji.name}** **||** **${emoji.id}**

**Emoji yeniden yüklendi yetkili jaile atıldı!**`)
  channel.send(`@everyone`, {embed: fayik})
});

client3.on("emojiCreate", async (emoji, message) => {
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  emoji.delete({reason: "Emoji Koruma Sistemi!"});
  const uyecik = emoji.guild.members.cache.get(entry.executor.id);
  uyecik.roles.set([ayarlar3.karantinarol]).catch(err => {})
  let channel = client3.channels.cache.get(ayarlar3.log2)
  if (!channel) return console.log('Emoji Yükleme Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar3.color)
  .setFooter(ayarlar3.footer)
  .setDescription(`
**İzinsiz Emoji Yüklendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji silindi ve yetkili jaile atıldı!**`)
  channel.send(`@everyone`, {embed: fayik})
});

client3.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  if(oldEmoji === newEmoji) return;
  const entry = await oldEmoji.guild.fetchAuditLogs({ type: "EMOJI_UPDATE" }).then(audit => audit.entries.first());
  if(!entry || !entry.executor || Date.now()-entry.createdTimestamp > 10000) return;
  if(fayikik3.bots.includes(entry.executor.id)) return;
  if(fayikik3.owners.includes(entry.executor.id)) return;
  if(fayikik3.guvenlid.includes(entry.executor.id)) return;
  await newEmoji.setName(oldEmoji.name);
  const uyecik = oldEmoji.guild.members.cache.get(entry.executor.id);
  uyecik.roles.set([ayarlar3.karantinarol]).catch(err => {})
  let channel = client3.channels.cache.get(ayarlar3.log2)
  if (!channel) return console.log('Emoji Güncelleme Koruma Logu Yok!');
  const fayik = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor(ayarlar3.color)
  .setFooter(ayarlar3.footer)
  .setDescription(`
**İzinsiz Emoji Güncellendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${oldEmoji.name}** **||** **${oldEmoji.id}**

**Emoji eski haline getirildi ve yetkili jaile atıldı!**`)
  channel.send(`@everyone`, {embed: fayik})
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client1.on("ready", async () => {
client1.user.setPresence({ activity: { name: ayarlar1.botdurum }, status: ayarlar1.status });
});

client1.on("ready", async () => {
console.log(`${client1.user.username} ismi ile giriş yapıldı! Guard I Online`);
});  

client1.login(ayarlar1.token1).catch(err => {
console.error('Guard I Giriş Yapamadı!')
console.error(err.message)
});

////

client2.on("ready", async () => {
client2.user.setPresence({ activity: { name: ayarlar1.botdurum }, status: ayarlar2.status });
});

client2.on("ready", async () => {
console.log(`${client2.user.username} ismi ile giriş yapıldı! Guard II Online`);
});

client2.login(ayarlar2.token2).catch(err => {
console.error('Guard II Giriş Yapamadı!')
console.error(err.message)
});

///

client3.on("ready", async () => {
client3.user.setPresence({ activity: { name: ayarlar1.botdurum }, status: ayarlar3.status });
});

client3.on("ready", async () => {
console.log(`${client3.user.username} ismi ile giriş yapıldı! Guard III Online`);
});      

client3.login(ayarlar3.token3).catch(err => {
console.error('Guard III Giriş Yapamadı!')
console.error(err.message)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client1.on('warn', m => console.log(`[WARN - 1] - ${m}`));
client1.on('error', m => console.log(`[ERROR - 1] - ${m}`));
process.on('uncaughtException', error => console.log(`[ERROR - 1] - ${error}`));
process.on('unhandledRejection', (err) => console.log(`[ERROR - 1] - ${err}`));

client2.on('warn', m => console.log(`[WARN - 2] - ${m}`));
client2.on('error', m => console.log(`[ERROR - 2] - ${m}`));
process.on('uncaughtException', error => console.log(`[ERROR - 2] - ${error}`));
process.on('unhandledRejection', (err) => console.log(`[ERROR - 2] - ${err}`));

client3.on('warn', m => console.log(`[WARN - 3] - ${m}`));
client3.on('error', m => console.log(`[ERROR - 3] - ${m}`));
process.on('uncaughtException', error => console.log(`[ERROR - 3] - ${error}`));
process.on('unhandledRejection', (err) => console.log(`[ERROR - 3] - ${err}`));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
