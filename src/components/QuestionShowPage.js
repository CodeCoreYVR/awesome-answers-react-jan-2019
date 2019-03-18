import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import '../styles/page.css';
import oneQuestionData from '../oneQuestionData';

// Composing components together
// Demo: Question Show Page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://date-fns.org/
class QuestionShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: { ...oneQuestionData },
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
		this.deleteAnswer = this.deleteAnswer.bind(this);
	}

	deleteQuestion() {
		this.setState({
			question: null,
		});
	}

	deleteAnswer(answerId) {
		console.log('this', this);
		this.setState((state) => {
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
						(answer) => answer.id !== answerId,
					),
				},
			};
		});
	}

	render() {
		if (!this.state.question) {
			return (
				<main>
					<h1>Question does not exist!</h1>
				</main>
			);
		}
		return (
			<main>
				<QuestionDetails
					// title={this.state.question.title}
					// body={this.state.question.body}
					{...this.state.question}
				/>
				<button onClick={() => this.deleteQuestion()}>
					Delete Question
				</button>
				{/* {QuestionDetails({ ...this.state.question })} */}
				<h2>Answers</h2>
				<AnswerList
					answers={this.state.question.answers}
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
