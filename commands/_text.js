/*CMD
  command: /text
  help: text
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
    "<b>Hi, <a href='tg://user?id="+user.telegramid+"'>"+user.first_name+"</a>!\n\nI am Font Genrator Bot. you can change your text to stylish text by font Now Send Me Any Text What You Want To Convert In Stylish Text. Send Text And Select Font Style. By @MrkillerDeveloper</b>",
  parse_mode: "html"
})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

