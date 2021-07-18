const inquirer = require("inquirer");
const prompt = (arr) => {
  return inquirer
    .prompt([
      {
        name: "questions",
        message: "What's your favorite color?",
        type: "list",
        choices: arr,
      },
    ])
    .then((answer) => {
      console.log(answer.questions);
    });
};
module.exports = {
  prompt,
};
