/*CMD
  command: /script_b
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
    A: "𝓐",
    B: "𝓑",
    C: "𝓒",
    D: "𝓓",
    E: "𝓔",
    F: "𝓕",
    G: "𝓖",
    H: "𝓗",
    I: "𝓘",
    J: "𝓙",
    K: "𝓚",
    L: "𝓛",
    M: "𝓜",
    N: "𝓝",
    O: "𝓞",
    P: "𝓟",
    Q: "𝓠",
    R: "𝓡",
    S: "𝓢",
    T: "𝓣",
    U: "𝓤",
    V: "𝓥",
    W: "𝓦",
    X: "𝓧",
    Y: "𝓨",
    Z: "𝓩",
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃"
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

