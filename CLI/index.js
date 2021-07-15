const fetch = require("node-fetch");
//  explicit OAuth 2.0

const url =
  "https://api.stackexchange.com/2.3/search?page=1&pagesize=20&order=desc&sort=relevance&tagged=javascript&intitle=reference%20error&site=stackoverflow";

const fetchQuestions = async () => {
  const results = await (await fetch(url)).json();
  const x = await results;
  console.log(x.items);
};
fetchQuestions();
