/*CMD
  command: /stats
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

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  var userpayment = Libs.ResourcesLib.anotherChatRes("total_bot", "global")
  var inline = [[{title : "⧼⧼ Bᴀck" , command : "/start"}]]
Api.sendMessage({text: "📊 <b>Bot Live Statistics\n\n👥 Users = "+status.value().toFixed(0)+"\n\n© @MrkillerDeveloper </b>",parse_mode: "HTML"}) 

