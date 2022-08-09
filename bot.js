const { User } = require("discord.io");
var Discord = require("discord.io");
var bot = new Discord.Client({
  autorun: true,
  token:
    "MTAwNTgzNDEyOTAyOTQ3NjQzMg.G3aXbu.cx_DHpGqGRFLp8j7bdec5W34MJiig9wurLgn0k",
});
bot.getMembers;

//Array of objects for quotations keywords, and quotes--
const quotes = [
  {
    id: 1,
    keywords: ["women", "children", "killed them"],
    quote:
      "I killed them. I killed them all. They're dead, every single one of them. And not just the men, but the women and the children, too",
  },
  {
    id: 2,
    keywords: ["sand", "coarse"],
    quote:
      "I don't like sand. It's coarse and rough and irritating and it gets everywhere. Not like here. Here everything is soft and smooth.",
  },
];

bot.on("ready", function (event) {
  console.log("Logged in as %s - %s\n", bot.username, bot.id);
  // bot.sendMessage({
  //   to: "874217323676971030",
  //   message: `This is where the fun begins! \nAnakin is online`,
  // });
});

//FIND MATCH AND RESPOND

let quoteArray = [];
bot.on("message", function (user, userID, channelID, message, event) {
  if (user !== "QuickBot") {
    quotes.map((item) => {
      item.keywords.map((key) => {
        if (message.toLowerCase().includes(key)) {
          quoteArray.push(item.quote);
        }
      });
    });
    bot.sendMessage({
      to: channelID,
      message: quoteArray[0],
    });
    quoteArray = [];
  }
});

console.log(User.username);
