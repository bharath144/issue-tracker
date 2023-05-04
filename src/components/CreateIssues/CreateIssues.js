import React, { useState } from "react";

import "./CreateIssues.css";

function CreateIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (title === "")
      return;
    let result = await fetch(
      "http://localhost:5000/records", {method: "post",body: JSON.stringify({ title, description, priority }),headers: {"Content-Type": "application/json"}}
    );
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Issue created succesfully!");
      setTitle("");
      setDescription("");
      setPriority("Low");
    }
  };

  return (
    <div className="create-issues">
      <form>
        <label>State:<input type="text" disabled="true" value="New" /></label>
        <label>Title:<input type="text" required="true" placeholder="Enter a title for your Issue..." onChange={(e) => setTitle(e.target.value)} /></label>
        <label>Description:<input type="text" placeholder="Add more details..." onChange={(e) => setDescription(e.target.value)} /></label>
        <label>
          Priority:
          <select id="priority" name="priority" onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="low">Medium</option>
            <option value="low">High</option>
            <option value="low">Critical</option>
          </select>
        </label>
        <button type="submit" onClick={handleOnSubmit}>Create</button>
        <button type="reset" style={{ float: "right" }} className="cancel-button">Reset</button>
      </form>
    </div>
  );
}

export default CreateIssue;
