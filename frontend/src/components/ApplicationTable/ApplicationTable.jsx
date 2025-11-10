import "./ApplicationTable.css"

import ApplicationTableRow from "../ApplicationTableRow/ApplicationTableRow";

const ApplicationTable = (props) => {

  return (
    <ul className="application-table">
      <li className="board-title">
        <h2>All Applications</h2>
        <input type="search" placeholder="Search"/>
      </li>
      <li className="application-table-row">
        <ul className="table-header">
          <li className="star">★</li>
          <li>Company Name</li>
          <li>Job Title</li>
          <li>Salary</li>
          <li>Comments</li>
          <li>Status</li>
        </ul>
      </li>
      {
        props.applications.map((application) => (
          <ApplicationTableRow application={application} key={application._id} changeView={props.changeView} toggleConfirmationModal={props.toggleConfirmationModal} />
        ))
      }
    </ul>
  )
}

export default ApplicationTable;