import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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

// This function is a React Component
// It is a function that returns a React Element
function AnswerDetails(props) {
  return (
    // Returns a React Element
    <div>
      <p>
        {props.body}
        <br />
        By {props.author.full_name}
      </p>
      <p>Answered at {props.created_at.toLocaleString()}</p>
    </div>
  );
}

/* <h2>What is your favourite colour?</h2>
<p>
  Red, green, blue, magenta, etc. <br />
  By Bridge Troll
</p>
<p>
  <small>Seen 10 time(s)</small> – <small>Created 10 days ago</small>
</p> */

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
      <AnswerDetails
        body="Red."
        author={{ full_name: "King Arthur" }}
        created_at={new Date()}
      />
      <AnswerDetails
        body="Blue."
        author={{ full_name: "King Arthur" }}
        created_at={new Date()}
      />
      <AnswerDetails
        body="Green."
        author={{ full_name: "King Arthur" }}
        created_at={new Date()}
      />
    </main>
  );
}

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
