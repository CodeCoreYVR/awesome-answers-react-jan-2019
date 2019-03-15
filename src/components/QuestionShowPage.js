import React from "react";
// const QuestionDetails = require("./QuestionDetails")
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";
import "../styles/page.css";
import oneQuestionData from "../oneQuestionData";

// Composing components together
// Demo: Question Show Page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://date-fns.org/
function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, green, blue, magenta, etc."
        author={{ full_name: "Bridge Troll" }}
        view_count={100}
        created_at={new Date()}
      />
      <h2>Answers</h2>
      <AnswerList answers={oneQuestionData.answers} />
    </main>
  );
}

export default QuestionShowPage;
