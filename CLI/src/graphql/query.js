const fetch = require("node-fetch");
const query = `query 
  getQuestion($intitle: String!, $tags: [String]) {
    getQuestion(intitle: $intitle, tags: $tags){
      title
      tags
      creation_date
      link
      body
      body_markdown
      question_id
      is_answered
      answers{
        owner {
          account_id
          reputation
          user_id
          user_type
          profile_image
          display_name
          link
        }
        is_accepted
        score
        last_activity_date
        last_edit_date
        creation_date
        answer_id
        question_id
        content_license
        link
        body_markdown
        body
      }
    }
}`;
// const variables = {
//   intitle: "reference error",
// };

const getQuestion = async (variables) => {
  const res = await (
    await fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  ).json();
  // console.log(res);
  return res.data.getQuestion;
};

module.exports = {
  getQuestion,
};
