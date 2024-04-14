/*CMD
  command: /joined
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

let stat = Bot.getProperty(""+user.telegramid+"?Ban");

if (stat=="ban"){
  Bot.sendMessage("*You're Banned From Using The Bot ❌*");
}else{
  let channel = "@Hpbot_update";
  let id = user.telegramid
  Api.getChatMember({ 
    chat_id : channel,
    user_id : id,
    on_result :"check"
  })
}

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
