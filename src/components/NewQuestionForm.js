import React from 'react';

function NewQuestionForm(props) {
	function handleSubmit(event) {
		event.preventDefault();
		const { currentTarget } = event;
		const fD = new FormData(currentTarget);

		props.onSubmit({
			title: fD.get('title'),
			body: fD.get('body'),
		});

		currentTarget.reset();
	}
	return (
		<form className="NewQuestionForm" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label>
				<br />
				<input name="title" id="title" />
			</div>
			<div>
				<label htmlFor="body">Body</label>
				<br />
				<textarea name="body" id="body" />
			</div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default NewQuestionForm;
