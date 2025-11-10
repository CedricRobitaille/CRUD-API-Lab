const ApplicationTableRow = (props) => {

  return (
    <li className="application-table-row">
      <ul>
        <li>{props.application.starred && <p>*</p>}</li>
        <li>{props.application.company}</li>
        <li>{props.application.position}</li>
        <li>{props.application.salary}</li>
        <li>{props.application.notes}</li>
        <li className="status">
          <select name="status" id="status" defaultValue={props.application.status}>
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