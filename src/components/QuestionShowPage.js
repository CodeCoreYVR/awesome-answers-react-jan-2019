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
	}
	render() {
		return (
			<main>
				<QuestionDetails
					// title={this.state.question.title}
					// body={this.state.question.body}
					{...this.state.question}
				/>
				{/* {QuestionDetails({ ...this.state.question })} */}
				<h2>Answers</h2>
				<AnswerList answers={this.state.question.answers} />
			</main>
		);
	}
}

export default QuestionShowPage;
