import React from "react";

import "./CreateIssues.css";

function CreateIssue() {
  return (
    <div className="create-issues">
      <form>
        <label>State:<input type="text" disabled="true" value="New" /></label>
        <label>Title:<input type="text" required="true" placeholder="Enter a title for your Issue..."/></label>
        <label>Description:<input type="text" placeholder="Add more details..."/></label>
        <label>
          Priority:
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="low">Medium</option>
            <option value="low">High</option>
            <option value="low">Critical</option>
          </select>
        </label>
        <button type="submit">Create</button>
        <button type="reset" style={{float: "right"}} className="cancel-button">Reset</button>
      </form>
    </div>
  );
}

export default CreateIssue;
