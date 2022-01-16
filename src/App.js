import "./App.css";
import DeleteTeacher from "./components/DeleteTeacher";
import ViewAttQuiz from "./components/ViewAttQuiz";
import ViewClass from "./components/ViewClass";
import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
export default function BasicExample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/viewattquiz">View Att Quiz</Link>
        </li>
        <li>
          <Link to="/viewclass">View Class</Link>
        </li>
        <li>
          <Link to="/deleteteacher">Delete Teacher</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/viewattquiz">
          <ViewAttQuiz />
        </Route>
        <Route path="/viewclass">
          <ViewClass />
        </Route>
        <Route path="/deleteteacher">
          <DeleteTeacher />
        </Route>
      </Switch>
    </div>
  );
}
