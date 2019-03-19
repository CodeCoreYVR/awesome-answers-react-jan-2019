import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import QuestionIndexPage from './QuestionIndexPage';
import QuestionShowPage from './QuestionShowPage';

function App() {
	return (
		// We need to wrap all components that are imported from `react-router-dom`
		// inside of a `Router` component
		// in this case, we are using the `BrowserRouter`
		// What this does is allow all descendants of the BrowserRouter to use
		// any and all components that come with `react-router-dom`
		<BrowserRouter>
			<div>
				<NavBar />
				{/* 
					The Route component has many props it uses to determine 
					which component to render and when to render that component.
					- path: when the path prop matches the path in the url,
						the component given to the component prop will be displayed
					- component: this prop is used to tell the Route which component
						should be rendered when the path matches the url
					- exact: the exact prop requires the path to exactly match the url
						as opposed to the default behavior of a Route which is to
						match on the beginning of the url
				*/}
				<Route path="/questions" exact component={QuestionIndexPage} />
				{/* <QuestionIndexPage showAll={true} /> */}
				<Route path="/questions/:id" component={QuestionShowPage} />
			</div>
		</BrowserRouter>
	);
}

export default App;
