import ApplicationTableRow from "../ApplicationTableRow/ApplicationTableRow";

const ApplicationTable = (props) => {

  return (
    <ul className="application-table">
      <li className="application-table-row">
        <ul className="table-header">
          <li></li>
          <li>Company Name</li>
          <li>Job Title</li>
          <li>Salary</li>
          <li>Comments</li>
          <li className="status">Status</li>
        </ul>
      </li>
      {
        props.applications.map((application) => (
          <ApplicationTableRow application={application} key={application._id} changeView={props.changeView} />
        ))
      }
    </ul>
  )
}

export default ApplicationTable;