import React from 'react';

import QuestionIndexPage from './QuestionIndexPage';
import QuestionShowPage from './QuestionShowPage';

function App() {
	return (
		<div>
			<QuestionIndexPage showAll={true} />
			<QuestionShowPage />
		</div>
	);
}

export default App;
