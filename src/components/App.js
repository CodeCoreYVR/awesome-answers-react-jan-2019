import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import QuestionNewPage from "./QuestionNewPage";
import SignInPage from "./SignInPage";
import AuthRoute from "./AuthRoute";
import { User, Session } from "../requests";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };

    this.getUser = this.getUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  }

  getUser() {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, currentUser } = this.state;

    if (loading) {
      return <div />;
    }

    return (
      // We need to wrap all components that are imported from `react-router-dom`
      // inside of a `Router` component
      // in this case, we are using the `BrowserRouter`
      // What this does is allow all descendants of the BrowserRouter to use
      // any and all components that come with `react-router-dom`
      <BrowserRouter>
        <div>
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />
          {/* 
						Switch only allows for one Route component to render its
						component prop.
						If there are multiple that could match that path, then the 
						first one that matches is the one that is selected
						(the one that wins)
						What this means is that the order of your Routes matters
						when using Switch!
					 */}
          <Switch>
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
            <AuthRoute
              isAuthenticated={currentUser}
              path="/questions/new"
              component={QuestionNewPage}
            />
            {/* <AuthRoute
              isAuthenticated={currentUser}
              path="/my_protected_page"
              component={MyOtherPage}
            /> */}
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
