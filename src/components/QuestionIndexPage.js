import React from "react";
import questionData from "../questionData";

function QuestionIndexPage() {
  return (
    <main>
      <h1>Questions</h1>
      <ul>
        {questionData.map(question => (
          <li key={question.id}>
            <p>
              {question.title}
              <br />
              <small>Seen {question.view_count} time(s)</small>
              {" – "}
              <small>
                Created at {new Date(question.created_at).toLocaleString()}
              </small>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default QuestionIndexPage;
