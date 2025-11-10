import { useState } from "react"

import "./ApplicationTableRow.css"

const ApplicationTableRow = (props) => {
  
  const [status, setStatus] = useState(props.application.status)
  const [starred, setStarred] = useState(props.application.starred)

  const handleStatusChange = async (event) => {

    const { name, checked, value } = event.target;
    let submission = {}

    if (name === "starred") {
      const newStarred = checked ? "on" : "off";
      setStarred(newStarred);
      submission = { starred: checked ? "true" : "false" };
    }

    if (name === "status") {
      setStatus(value);
      submission = { status: value };
    }
    
    const response = await fetch(`http://localhost:3000/api/applications/${props.application._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });
    const data = await response.json();
    console.log(data)
  }

  return (
    <li className="application-table-row">
      <ul>
        <li>
          <input type="checkbox" name="starred" id="starred" checked={starred === "on"} onChange={handleStatusChange} />
          <label htmlFor="starred" className="starred-label" >★</label>
        </li>
        <li>{props.application.company}</li>
        <li>{props.application.position}</li>
        <li>{props.application.salary}</li>
        <li>{props.application.notes}</li>
        <li className="status">
          <select name="status" id="status" defaultValue={status} onChange={handleStatusChange}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
          </select>
        </li>
        <li><button onClick={() => { props.toggleConfirmationModal(props.application) }}>🗑️</button></li>
      </ul>
    </li>
  )
}

export default ApplicationTableRow;