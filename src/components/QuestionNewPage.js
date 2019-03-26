import React, { Component } from "react";
import { Question } from "../requests";
import QuestionForm from "./QuestionForm";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    //                            👇 The Prototype Method
    // 👇 The Instance Method
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    // When our new question form is submitted,
    // send the form data in a fetch request to the server
    Question.create(params).then(data => {
      // This is how you do navigation using react-router-dom
      // The `Route` component gives all components that it renders
      // (like this one) a prop named `history`
      // This prop is an array-like structure that keeps track of
      // the entire navigation history within the app
      // To navigate to a new path, we use the `push` method
      // to push a new path onto this history array-like thing
      if (data.errors) {
        // console.log(data);

        this.setState({
          errors: data.errors
        });
      } else {
        this.props.history.push(`/questions/${data.id}`);
      }
    });
  }

  render() {
    const { errors = [] } = this.state;

    return (
      <main>
        <h1>Ask a Question</h1>
        <QuestionForm errors={errors} onSubmit={this.createQuestion} />
      </main>
    );
  }
}

export default QuestionNewPage;
