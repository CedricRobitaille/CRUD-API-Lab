import { useState } from "react"

const ApplicationTableRow = (props) => {

  const [status, setStatus] = useState(props.application.status)

  const handleStatusChange = async (event) => {
    await setStatus(event.target.value);
    const response = await fetch(`http://localhost:3000/api/applications/${props.application._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status: event.target.value}),
    });
    const data = await response.json();
    console.log(data)
  }

  return (
    <li className="application-table-row">
      <ul>
        <li>{props.application.starred && <p>*</p>}</li>
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
        <li><button onClick={() => { props.toggleConfirmationModal(props.application) } }>x</button></li>
      </ul>
    </li>
  )
}

export default ApplicationTableRow;