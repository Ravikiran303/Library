import React from "react";
import Library from "./Library/Library";
import { Register } from "./User/Register/Register";
import { Route, Switch } from "react-router-dom";
import Login from "./User/Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Register} />
        {/* <Route exact path="/user/register" component={Register} /> */}
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/books/:id" component={Library} />
      </Switch>
    </div>
  );
}

export default App;
