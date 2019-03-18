import React from 'react';

function DeleteButton(props) {
	return (
		<button
			style={{ backgroundColor: 'red' }}
			onClick={props.onDeleteClick}
		>
			Delete
		</button>
	);
}

export default DeleteButton;
