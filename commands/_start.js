/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  text:
    "<b>⛔ Mᴜsᴛ Jᴏɪɴ Oᴜʀ Aʟʟ Cʜᴀɴɴᴇʟs\n\n➡️<a href='https://t.me/Hpbot_update'> @Hpbot_update(Pvt)</a>\n➡️ @Hp_botupdate \n➡️ @MrKillerDeveloper\n➡️ @Movie_Flix_Zone \n\n✅ Aғᴛᴇʀ Jᴏɪɴɪɴɢ, Cʟɪᴄᴋ ᴏɴ 🟢 Jᴏɪɴᴇᴅ</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "🟢 Jᴏɪɴᴇᴅ", callback_data: "/joined" }]]
  }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

if (user.username != undefined) {
  var hh = "[@" + user.username + "]"
} else {
  var hh = ""
}
function touchingOwnLink() {
  Bot.sendMessage("*❌ Stop Clicking Your Own Link*")
}
function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text:
      "<b>🔋 Yᴏᴜ Gᴏᴛ ᴀ Nᴇᴡ</b><a href='tg://user?id=" +
      user.telegramid +
      "'>Rᴇғᴇʀʀᴀʟ</a> " +
      hh +
      "\n\n<b>💡 Rᴇᴡᴀʀᴅ Oɴʟʏ Iғ Rᴇғᴇʀʀᴀʟ Jᴏɪɴs Oᴜʀ Aʟʟ Cʜᴀɴɴᴇʟs</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
function alreadyStarted() {
  Bot.sendMessage("*🚫 Yᴏᴜ Hᴀᴠᴇ Aʟʀᴇᴀᴅʏ Sᴛᴀʀᴛᴇᴅ Tʜᴇ Bᴏᴛ*")
}

var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted, 
  linkPrefix: 'Bot'
}

RefLib.track(tracks)
if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")
  var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
  stat.add(1)
  Api.sendMessage({
    chat_id: "-1002091604380", //admin telegram id here
    text:
      "🚀 <b>Nᴇᴡ Usᴇʀ Nᴏᴛɪғɪᴄᴀᴛɪᴏɴ</b> 🚀\n\n💥<b>User:</b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> " +
      hh +
      "\n\n🗳<b>Usᴇʀ Iᴅ:</b> <code>" +
      user.telegramid +
      "</code>\n\n🫠 <b>Tᴏᴛᴀʟ Usᴇʀ's Cᴏᴜɴᴛ: " +
      stat.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
