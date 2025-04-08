import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <header>
        <h1>Now</h1> {/* Replace dynamic date/time with "Now" */}
      </header>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <div>
        <TestComponent /> {/* Ensure TestComponent is rendered */}
      </div>
    </div>
  );
}

export default App;
