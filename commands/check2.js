/*CMD
  command: check2
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

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  User.setProperty("userStatus", user, "string")
  Bot.runCommand("/text")
}

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

if (user == "left") {
  Bot.sendMessage("*⚔ Yᴏᴜ Dɪᴅɴ'ᴛ Jᴏɪɴ Oᴜʀ Aʟʟ Cʜᴀɴɴᴇʟs ⚔*")
}
