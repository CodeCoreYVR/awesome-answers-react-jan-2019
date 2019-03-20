// Import with { ... } is a named import which allows
// multiple exports from one file. However, each import
// must be referenced by name.
import React, { Component } from "react";

// Examples of named exports:
// export class Component { ... }
// export const Component = ...

class SignInPage extends Component {
  // constructor(props) {}

  render() {
    return (
      <main>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" id="password" />
          </div>

          <input type="submit" value="Sign In" />
        </form>
      </main>
    );
  }
}

export default SignInPage;
