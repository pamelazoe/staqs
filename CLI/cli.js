#!/usr/bin/env node
const { getQuestion } = require("./src/graphql/query");
const inquirer = require("inquirer");
const chalk = require("chalk");
const stripAnsi = require("strip-ansi");
const TerminalRenderer = require("marked-terminal");
const marked = require("marked");
marked.setOptions({
  renderer: new TerminalRenderer({
    unescape: true,
  }),
});
const { Command } = require("commander");
const program = new Command();
program.option("-t, --tags [tags...]");
program.parse();

const search = Array.isArray(program.args) ? program.args.join(" ") : prog;
const tags = program.opts().tags;

getQuestion({ intitle: search.toString(), tags }).then(async (data) => {
  // const arr = await data.map((d) => d.title);
  const obj = await data
    .map((d) => ({
      title: d.title,
      body: d.body,
      body_markdown: d.body_markdown,
      question_id: d.question_id,
      is_answered: d.is_answered,
      answers: d.answers,
      link: d.link,
      creation_date: d.creation_date,
    }))
    .filter((w) => w.is_answered === true);
  // const question = await
  if (obj.length <= 0) {
    console.log("There are no results for this search");
    process.exit();
  }
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "question",
        message: "Select one of this questions\n\n",
        choices: await obj.map(
          (x) => `${x.question_id} ${chalk.green.bold(x.title)}\n`
        ),
      },
    ])
    .then(async (answers) => {
      const stripped = await stripAnsi(answers.question);
      const q_id = stripped.split(" ")[0];
      const res = await obj.filter((el) => el.question_id === +q_id);
      // console.log(answers);
      const w = await res.map((el) => {
        console.log(
          `${chalk.bold(`Question link`)}: ${
            ("Link", chalk.blueBright(el.link))
          }`
        );
        console.log(`${marked(el.body_markdown)}`);
        const top_answers = el.answers
          .sort((a, b) => b.score - a.score)
          .slice(0, 3);
        // console.log(top_answers);
        const results = top_answers.map((ans, i) =>
          console.log(
            `${
              ans.is_accepted === true
                ? `========================\n${chalk.yellow.inverse(
                    `   ${++i}. ACCEPTED ANSWER   `
                  )}\n========================`
                : `==============\n${chalk.blue.inverse(
                    `   ANSWER ${++i}   `
                  )}\n==============`
            }\n${ans.link}\n${marked(ans.body_markdown)}`
          )
        );
        return results;
      });
    });
});
