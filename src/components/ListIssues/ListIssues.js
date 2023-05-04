import React from "react";

import "./ListIssues.css";

function ListIssues() {
  return (
    <div className="list-issues">
      <div className="an-issue">
        <button className="edit-issue-button" type="submit" style={{float: "right"}}>Edit</button>
        <p>State<span>New</span></p>
        <p>Title<span>I cannot do anything</span></p>
        <p>Priority<span>Low</span></p>
        <p>Description</p>
        <p className="issue-description">This is what I am having to go through.</p>
        <hr/>
      </div>
      <div className="an-issue">
        <button className="edit-issue-button" type="submit" style={{float: "right"}}>Edit</button>
        <p>State<span>New</span></p>
        <p>Title<span>I cannot do anything</span></p>
        <p>Priority<span>Low</span></p>
        <p>Description</p>
        <p className="issue-description">This is what I am having to go through.</p>
        <hr/>
      </div>
      <div className="an-issue">
        <button className="edit-issue-button" type="submit" style={{float: "right"}}>Edit</button>
        <p>State<span>New</span></p>
        <p>Title<span>I cannot do anything</span></p>
        <p>Priority<span>Low</span></p>
        <p>Description</p>
        <p className="issue-description">This is what I am having to go through.</p>
        <hr/>
      </div>
    </div>
  );
}

export default ListIssues;
