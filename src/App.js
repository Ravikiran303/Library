import React from "react";
import Library from "./Library/Library";
import { BookDetails } from "./BookDetails/BookDetails";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Library} />
        <Route exact path="/:details" component={BookDetails} />
      </Switch>
    </div>
  );
}

export default App;
