const ApplicationTableRow = (props) => {

  return (
    <li className="application-table-row">
      <ul>
        <li>{props.application.starred && "*"}</li>
        <li>{props.application.company}</li>
        <li>{props.application.position}</li>
        <li>{props.application.salary}</li>
        <li>{props.application.notes}</li>
        <li className="status">{props.application.status}</li>
      </ul>
    </li>
  )
}

export default ApplicationTableRow;