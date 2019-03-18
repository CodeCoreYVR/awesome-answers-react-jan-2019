import React, { Component } from 'react';
import questionsData from '../questionData';

class QuestionIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// This copies the questionsData array of questions,
			// into a new array that is stored in the state
			// of this component, as the state's question field
			// questions: questionsData.map((question) => question),
			questions: [...questionsData],
		};
		/*
      this.state is an object
      it has a single property, questions
      whose value is an array
      this.state.questions is an array of questions
    */
	}

	deleteQuestion(id) {
		console.log('Deleting', id);
		// console.log('this', this);

		// To change `state`, you must ALWAYS use `this.setState(...)`

		// You can use setState by passing an object to its first argument.
		// When the time comes, the object will be merged with the current state.
		// This will change whatever properties are within the current state

		// this.setState({
		// 	questions: this.state.questions.filter((q) => q.id !== id),
		// });

		// You can also use setState by giving a callback as a first argument
		// that receives the current state and props as arguments.
		// It must return an object that will be merged with the state
		this.setState((state, props) => {
			return {
				questions: state.questions.filter(
					(question) => question.id !== id,
				),
			};
		});

		// More on setState
		// https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
	}

	render() {
		const filteredQuestions = this.state.questions.filter((q, index) => {
			if (this.props.showAll || index < 5) {
				return true;
			}
			return false;
		});
		return (
			<main>
				<h1>Questions</h1>
				<ul>
					{filteredQuestions.map((question) => (
						<li key={question.id}>
							<p>
								{question.title}
								<br />
								<small>
									Seen {question.view_count} time(s)
								</small>
								{' – '}
								<small>
									Created at{' '}
									{new Date(
										question.created_at,
									).toLocaleString()}
								</small>
								<button
									onClick={() =>
										this.deleteQuestion(question.id)
									}
								>
									Delete
								</button>
							</p>
						</li>
					))}
				</ul>
			</main>
		);
	}
}

export default QuestionIndexPage;

// How copying works
// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// const arr3 = [...arr1];

// arr2 === arr1; // true
// arr1 === arr3; // false

// arr1.push(5);
// we would then see that arr1 and arr2 both have a 5 in them now
// but arr3 would not and would remain unchanged
