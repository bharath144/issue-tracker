import React, { useState } from "react";
import CreateIssue from "./components/CreateIssues/CreateIssues.js";
import ListIssues from "./components/ListIssues/ListIssues.js";

import "./App.css";

function App() {
  const [createIssue, setCreateIssue] = useState(false);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-input-container">
        {createIssue ? <CreateIssue /> : <ListIssues />}
      </div>
      <div className="view-selection">
        <button className="main-button">List Issues</button>
        <button className="main-button active-button">Create Issue</button>
      </div>
    </div>
  );
}

export default App;
