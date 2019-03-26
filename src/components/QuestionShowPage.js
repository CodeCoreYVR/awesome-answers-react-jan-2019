import "../styles/page.css";
import { Link } from "react-router-dom";
import { Question } from "../requests";
import AnswerList from "./AnswerList";
import QuestionDetails from "./QuestionDetails";
import React, { Component } from "react";

// Composing components together
// Demo: Question Show Page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://date-fns.org/
class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      isLoading: true
    };
    /*
    //  this.state is object
      this.state === {
        // it has a single property, question
        // whose value is another object
        question: { ... }
      }
    */
    // We do this to make sure that whenever deleteAnswer will be called,
    // its `this` will refer to the instance of the component where we can `setState`
    // Since `this` gets its value at the time of execution, not when it is defined
    // `this` can sometimes change
    // We use the line below to specify to JS that `this` needs to get its value at the time
    // it is defined
    // In this case, `this` within `deleteAnswer` will now always refer to the
    // instance of the QuestionShowPage component
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    // All components that are rendered by a Route component (like this one)
    // will be given props by that Route component
    // One of these props, called match, contains information related to
    // the pattern matched path defined in App.js
    // <Route path="/questions/:id/:test/:blorg" component={QuestionShowPage} />
    // match: {
    // 	params: {
    // 		id: <whatever-the-id-is>,
    // 		test: <whatever-the-test-is>,
    // 		blorg: <whatever-the-blorg-is>,
    // 	}
    // }
    // Because the Route looked like the one above, the Route component
    // pattern matched on the `:id`, and will give us a param called `id`
    // within a property of `match` called `params`, as used below
    Question.one(this.props.match.params.id).then(question => {
      this.setState({
        question: question,
        isLoading: false
      });
    });
  }

  deleteQuestion(event) {
    event.preventDefault();

    Question.delete(this.state.question.id).then(data => {
      this.props.history.push(`/questions`);
    });
  }

  deleteAnswer(answerId) {
    this.setState(state => {
      return {
        // We can only change the `question` property of `this.state`
        // But we need to modify a property OF that question in our state
        question: {
          // To delete an answer, we need to update the array of answers that belongs
          // to that question
          // But we do not want to update any other part of the question
          // So, we copy the previous question from our state
          ...state.question,
          // Then we explicitly modify the answers property of that question
          answers: state.question.answers.filter(
            // And we filter that answers array to remove the answer with the selected id
            answer => answer.id !== answerId
          )
        }
      };
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main>
          <h3>Loading...</h3>
        </main>
      );
    }

    if (!this.state.question) {
      return (
        <main>
          <h1>Question does not exist!</h1>
        </main>
      );
    }

    const { question } = this.state;

    return (
      <main>
        <QuestionDetails {...question} />
        <div>
          <Link to={`/questions/${question.id}/edit`}>Edit</Link>{" "}
          <a href="#" onClick={this.deleteQuestion}>
            Delete
          </a>
        </div>

        <h2>Answers</h2>

        <AnswerList
          answers={question.answers}
          // This function calls the deleteAnswer method which
          // will remove that answer from the question state
          // It passes the method to its child component, AnswerList
          // so that it can pass it on to the AnswerDetails component
          onAnswerDeleteClick={this.deleteAnswer}
        />
      </main>
    );
  }
}

export default QuestionShowPage;

// fetch('/questions').then(res => res.json()).then(data => console.log(data))
// fetch('/questions').then(res => res.json()).then(console.log)
