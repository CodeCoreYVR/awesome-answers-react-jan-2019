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
	render() {
		return (
			<main>
				<h1>Questions</h1>
				<ul>
					{this.state.questions.map((question) => (
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
