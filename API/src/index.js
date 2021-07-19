const { ApolloServer, gql } = require("apollo-server");
const { default: fetch } = require("node-fetch");
require("dotenv").config();

const typeDefs = gql`
  type Query {
    hello: String!
    getQuestion(
      intitle: String!
      tags: [String]
      only_answered: Boolean
    ): [Question]
  }

  type Tags {
    tags: [String]
  }

  type Question {
    tags: [String]
    owner: Owner
    is_answered: Boolean!
    view_count: Int!
    accepted_answer_id: Int
    answer_count: Int!
    score: Int!
    last_activity_date: Int!
    creation_date: Int!
    last_edit_date: Int!
    question_id: Int!
    content_license: String!
    link: String!
    title: String!
    body: String!
    body_markdown: String!
    answers: [Answer]
  }
  type Owner {
    account_id: Int
    reputation: Int
    user_id: Int
    user_type: String
    profile_image: String
    display_name: String
    link: String
  }
  type Answer {
    owner: Owner
    is_accepted: Boolean
    score: Int
    last_activity_date: Int
    last_edit_date: Int
    creation_date: Int
    answer_id: Int
    question_id: Int
    content_license: String
    link: String
    body_markdown: String
    body: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getQuestion: async (_, { intitle, tags }) => {
      // console.log(tags);
      const req = await (
        await fetch(
          `https://api.stackexchange.com/2.3/search?page=1&pagesize=10&order=desc&sort=relevance&tagged=${
            tags !== undefined ? [...tags].join(";") : ""
          }&intitle=${intitle}&site=stackoverflow&key=${
            process.env.STACKOVERFLOW_KEY
          }&filter=!*MZqiH2nLK(DCyKD`
        )
      ).json();
      // console.log(req);
      return req.items;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at port ${url}`));
