function randomText() {
  var quote = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“All you need is love. But a little chocolate now and then doesn't hurt.”",
    "“Be the change that you wish to see in the world.”",
    "“You talk when you cease to be at peace with your thoughts.”",
    "“There is nothing either good or bad, but thinking makes it so.”"
  ];
  var name = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Mae West",
    "― Robert Frost",
    "― Mark Twain",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Charles M. Schulz",
    "― Mahatma Gandhi",
    "― Kahlil Gibran",
    "― William Shakespear"
  ];

  var num = Math.floor(Math.random() * name.length);

  document.getElementById("newQuote").innerHTML = quote[num];
  document.getElementById("newQuoteAuther").innerHTML = name[num];
}
