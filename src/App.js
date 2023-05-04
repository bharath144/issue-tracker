import React, { useState } from "react";
import CreateIssue from "./components/CreateIssues/CreateIssues.js";
import ListIssues from "./components/ListIssues/ListIssues.js";

import "./App.css";

function App() {
  const [createIssue, setCreateIssue] = useState(true);

  function switchToCreateView() {
    setCreateIssue(true);
  }

  function switchToListView() {
    setCreateIssue(false);
  }

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-input-container">
        {createIssue ? <CreateIssue /> : <ListIssues />}
      </div>
      <div className="view-selection">
        <button className="main-button" onClick={() => switchToListView()}>List Issues</button>
        <button className="main-button active-button" onClick={() => switchToCreateView()}>Create Issue</button>
      </div>
    </div>
  );
}

export default App;
