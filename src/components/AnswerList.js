import React from 'react';
import AnswerDetails from './AnswerDetails';

function AnswerList(props) {
	return (
		<ul>
			{props.answers.map((answer) => (
				<li key={answer.id}>
					<AnswerDetails
						id={answer.id}
						body={answer.body}
						author={answer.author}
						created_at={new Date(answer.created_at)}
						onDeleteClick={(id) => props.onAnswerDeleteClick(id)}
					/>
				</li>
			))}
		</ul>
	);
}

export default AnswerList;
