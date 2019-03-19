import React, { Component } from 'react';
import NewQuestionForm from './NewQuestionForm';
import CurrentDateTime from './CurrentDateTime';

import { Question } from '../requests';

class QuestionIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// Initially the list of questions is empty until we fetch
			// them from the server
			questions: [],
			// Initially, before we have fetched the questions
			// from the server, we will display some loading
			// indicator to the user
			// but once we have fetched the questions, we will change
			// the isLoading property to `false`,
			// and display the regular list of questions
			isLoading: true,
			// This boolean is used to determine if we should display
			// the CurrentDateTime component
			shouldShowTime: true,
		};
		/*
      this.state is an object
      it has a single property, questions
      whose value is an array
      this.state.questions is an array of questions
    */

		this.createQuestion = this.createQuestion.bind(this);
	}

	componentDidMount() {
		// When the QuestionIndexPage component is mounted,
		// we will fetch all of the questions from the server
		Question.all().then((questions) => {
			this.setState({
				questions: questions,
				isLoading: false,
			});
		});
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

	createQuestion(params) {
		// update the list of questions within our state
		// by adding a new question to that list
		this.setState((state) => {
			return {
				questions: [
					{
						...params,
						// Remember to include the current date
						created_at: new Date(),
						// and since there is no db yet,
						// we need to generate ids for ourselves
						// but this will be done by a db later
						id:
							Math.max(
								...state.questions.map(
									(question) => question.id,
								),
							) + 1,
					},
					// copy the previous list of questions from our state
					// into this new array, following the newly created question
					...state.questions,
				],
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

		const filteredQuestions = this.state.questions.filter((q, index) => {
			if (this.props.showAll || index < 5) {
				return true;
			}
			return false;
		});
		return (
			<main>
				{/* 
					The code below will conditionally render the CurrentDateTime component
					based on some boolean value, `this.state.shouldShowTime`.
					When `this.state.shouldShowTime` is true, React will render the component
					and place it in the DOM.
					When `this.state.shouldShowTime` is false, React will NOT render 
					the component.
					When updating `this.state.shouldShowTime`, React will either re-mount
					the component if it was previously unmounted, or unmount the component
					if it was previously mounted
					
					Currently, the only way we have to update this value is using the
					React DevTools in the browser.
					But theoretically this could have been updated by calling 
					`this.setState` after some event occurs 
					(i.e. clicking, hovering, typing, etc)
				 */}
				{this.state.shouldShowTime && <CurrentDateTime />}
				<NewQuestionForm onSubmit={this.createQuestion} />
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
