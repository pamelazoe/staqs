#!/usr/bin/env node
const { getQuestion } = require("./src/graphql/query");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");
const inquirer = require("inquirer");
const { Command } = require("commander");
const program = new Command();
program.option("-t, --tags [tags...]");
program.parse();

const search = Array.isArray(program.args) ? program.args.join(" ") : prog;
// console.log(search.toString());
const tags = program.opts().tags;

marked.setOptions({
  renderer: new TerminalRenderer({
    unescape: true,
  }),
});

getQuestion({ intitle: search.toString(), tags }).then(async (data) => {
  const arr = await data.map((d) => d.title);
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "theme",
        message: "Choose one of this choices",
        choices: await arr,
      },
    ])
    .then((answers) => {
      console.log(`${answers.theme}`);
    });

  // data.map((data) => {
  //   console.log([data.title]);
  // console.log(
  //   `${data.title}\n${data.tags.join(", ")}\n${data.creation_date}\n${
  //     data.link
  //   }\n`
  // );
  // });
});
