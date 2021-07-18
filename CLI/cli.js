#!/usr/bin/env node
const { getQuestion } = require("./src/graphql/query");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");
const { Command } = require("commander");
const program = new Command();
program.option("-t, --tags [tags...]");
program.parse();

const search = Array.isArray(program.args)
  ? program.args.join(" ")
  : program.args;
console.log(search.toString());
const tags = program.opts().tags;

marked.setOptions({
  renderer: new TerminalRenderer({
    unescape: true,
  }),
});

getQuestion({ intitle: search.toString(), tags }).then(async (data) => {
  data.map((data) => {
    // console.log(data);
    console.log(
      `${data.title}\n${data.tags.join(", ")}\n${data.creation_date}\n${
        data.link
      }\n`
    );
  });
});
