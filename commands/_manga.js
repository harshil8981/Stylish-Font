/*CMD
  command: /manga
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var font = User.getProperty("fonts", message, "string")

function applyFontStyle(text) {
  const fontMapping = {
    A: "卂",
    B: "乃",
    C: "匚",
    D: "ᗪ",
    E: "乇",
    F: "千",
    G: "ᘜ",
    H: "卄",
    I: "|",
    J: "ﾌ",
    K: "Ҝ",
    L: "ㄥ",
    M: "爪",
    N: "几",
    O: "ㄖ",
    P: "卩",
    Q: "Ҩ",
    R: "尺",
    S: "丂",
    T: "ㄒ",
    U: "ㄩ",
    V: "ᐯ",
    W: "山",
    X: "乂",
    Y: "ㄚ",
    Z: "乙",
    a: "卂",
    b: "乃",
    c: "匚",
    d: "ᗪ",
    e: "乇",
    f: "千",
    g: "ᘜ",
    h: "卄",
    i: "|",
    j: "ﾌ",
    k: "Ҝ",
    l: "ㄥ",
    m: "爪",
    n: "几",
    o: "ㄖ",
    p: "卩",
    q: "Ҩ",
    r: "尺",
    s: "丂",
    t: "ㄒ",
    u: "ㄩ",
    v: "ᐯ",
    w: "山",
    x: "乂",
    y: "ㄚ",
    z: "乙"
  }
  // You Can Replace Font Also
  for (const char in fontMapping) {
    if (fontMapping.hasOwnProperty(char)) {
      const replacement = fontMapping[char]
      const regex = new RegExp(char, "g")
      text = text.replace(regex, replacement)
    }
  }

  return text
}

const userInput = font
const styledText = applyFontStyle(userInput)

var but = [
  [
    { text: "𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛", callback_data: "/typewriter" },
    { text: "𝕆𝕦𝕥𝕝𝕚𝕟𝕖", callback_data: "/outline" },
    { text: "𝐒𝐞𝐫𝐢𝐟", callback_data: "/serif" }
  ],
  [
    { text: "𝑺𝒆𝒓𝒊𝒇", callback_data: "/serif_bi" },
    { text: "𝑆𝑒𝑟𝑖𝑓", callback_data: "/serif_i" },
    { text: "Sᴍᴀʟʟ Cᴀᴘs", callback_data: "/smallcaps" }
  ],
  [
    { text: "𝓈𝒸𝓇𝒾𝓅𝓉", callback_data: "/script" },
    { text: "𝓼𝓬𝓻𝓲𝓹𝓽", callback_data: "/script_b" },
    { text: "ᵗⁱⁿʸ", callback_data: "/tiny" }
  ],
  [
    { text: "ᑕOᗰIᑕ", callback_data: "/comic" },
    { text: "𝗦𝗮𝗻𝘀", callback_data: "/sans_b" },
    { text: "𝙎𝙖𝙣𝙨", callback_data: "/sans_bi" }
  ],
  [
    { text: "𝘚𝘢𝘯𝘴", callback_data: "/sans_i" },
    { text: "𝖲𝖺𝗇𝗌", callback_data: "/sans" },
    { text: "Ⓒ︎Ⓘ︎Ⓡ︎Ⓒ︎Ⓛ︎Ⓔ︎Ⓢ︎", callback_data: "/circles" }
  ],
  [
    { text: "🅒︎🅘︎🅡︎🅒︎🅛︎🅔︎🅢︎", callback_data: "/circles_2" },
    { text: "𝔊𝔬𝔱𝔥𝔦𝔠", callback_data: "/gothic" },
    { text: "𝕲𝖔𝖙𝖍𝖎𝖈", callback_data: "/gothic_b" }
  ],
  [
    { text: "🇸 🇵 🇪 🇨 🇮 🇦 🇱 ", callback_data: "/special" },
    { text: "🅂🅀🅄🄰🅁🄴🅂", callback_data: "/squares" },
    { text: "🆂︎🆀︎🆄︎🅰︎🆁︎🅴︎🆂︎", callback_data: "/squares_2" }
  ],
  [
    { text: "ꪖꪀᦔꪖꪶꪊᥴ𝓲ꪖ", callback_data: "/andalucia" },
    { text: "爪卂几ᘜ卂", callback_data: "/manga" },
    { text: "꒒ꍏꀷꌩꌃꀎꁅ", callback_data: "/ladybug" }
  ],
  [
    { text: "S⃠t⃠o⃠p⃠", callback_data: "/stop" },
    { text: "ዪሀክቿነ", callback_data: "/rvnes" },
    { text: "F༙r༙o༙z༙e༙n༙", callback_data: "/frozen" }
  ],
  [
    { text: "C͜͡l͜͡o͜͡u͜͡d͜͡s͜͡", callback_data: "/clouds" },
    { text: "H̆̈ă̈p̆̈p̆̈y", callback_data: "/happy" },
    { text: "S̑̈ȃ̈d̑̈", callback_data: "/sad" }
  ]
]
Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text: styledText,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: but }
})

