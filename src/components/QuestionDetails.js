import React from "react";

// A React component is function that returns a React element.
// Your React component's must the PascalCase naming convention.
// Components whose names does not begin with a capital letter
// will be interpreted as a plain HTML tag.
function QuestionDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.author.full_name}
      </p>
      <p>
        <small>Seen {props.view_count} time(s)</small> –{" "}
        <small>Created {props.created_at.toLocaleString()}</small>
      </p>
    </div>
  );
}
// In JSX, self-closing tags must be closed. <img> doesn't work, you
// must write <img /> instead.

export default QuestionDetails;
