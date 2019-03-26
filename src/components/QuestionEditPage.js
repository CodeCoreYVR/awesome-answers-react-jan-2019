import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import { Question } from "../requests";

class QuestionEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      loading: true,
      question: null
    };

    this.updateQuestion = this.updateQuestion.bind(this);
  }

  loadQuestion() {
    Question.one(this.props.match.params.id).then(question => {
      this.setState({
        question: question,
        loading: false
      });
    });
  }

  updateQuestion(params) {
    const { question } = this.state;

    Question.update(question.id, params).then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors });
      } else {
        this.props.history.push(`/questions/${question.id}`);
      }
    });
  }

  componentDidMount() {
    this.loadQuestion();
  }

  render() {
    const { errors, loading, question } = this.state;

    if (loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main>
        <h1>Edit Question</h1>
        <QuestionForm
          data={question}
          errors={errors}
          onSubmit={this.updateQuestion}
        />
      </main>
    );
  }
}

export default QuestionEditPage;
