import React from "react";
import AnswerDetails from "./AnswerDetails";

function AnswerList(props) {
  return (
    <ul>
      {props.answers.map(answer => (
        <li key={answer.id}>
          <AnswerDetails
            body={answer.body}
            author={answer.author}
            created_at={new Date(answer.created_at)}
          />
        </li>
      ))}
    </ul>
  );
}

export default AnswerList;
