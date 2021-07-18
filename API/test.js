const fetch = require("node-fetch");
require("dotenv").config();

const x = async () => {
  const url = `https://stackoverflow.com/oauth/dialog?client_id=20582&scope=no_expiry&redirect_uri=http://localhost:3000/code&key=${process.env.STACKOVERFLOW_KEY}`;
  const res = await await fetch(url);
  console.log(res.url);
  return res;
};
x();

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

const url = `https://stackoverflow.com/oauth/access_token/json`;

// postData(url, {
//   client_id: "20582",
//   redirect_uri: "http://localhost:3000/code",
//   code: "x1UN0mp7U75D5b55vX6pHQ))",
//   client_secret: "xPVLnPloDvuX0SBanhDeng((",
//   scope: "no_expiry",
// }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

// const x = async () => {
//   const url =
//     "https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&tagged=javascript%3Bjson&intitle=reference%20error&site=stackoverflow";
//   const req = await (await fetch(url)).json();
//   const titles = await req.items.filter(
//     // (title) => title
//     // ({
//     //   title: title.title,
//     //   question_id: title.question_id,
//     //   tags: title.tags,
//     // })
//     (title) => title.is_answered === true
//   );
//   console.log(titles);
// };
// x();

// const arr = ["javascript", "json"];
// const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&tagged=${[
//   ...arr,
// ].join(";")}&intitle=reference%20error&site=stackoverflow`;
// console.log(url);

const code = {
  code: "x1UN0mp7U75D5b55vX6pHQ))",
};

// fetch(
//   "https://stackoverflow.com/users/login?returnurl=https://stackoverflow.com/oauth?client_id=20582&scope=no_expiry&redirect_uri=http://localhost:3000/code"
// ).then((data) => console.log(data.headers));
