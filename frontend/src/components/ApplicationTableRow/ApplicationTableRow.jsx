const ApplicationTableRow = (props) => {

  const deleteApplication = async () => {
    try {
      console.log(props.application._id)
      const response = await fetch(`http://localhost:3000/api/applications/${props.application._id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(error);
      }
      const data = await response.json();
      props.changeView("viewApps");
    } catch (error) {
      console.log("Error fetching base data: ", error.message)
    }
  }

  return (
    <li className="application-table-row">
      <ul>
        <li>{props.application.starred && <p>*</p>}</li>
        <li>{props.application.company}</li>
        <li>{props.application.position}</li>
        <li>{props.application.salary}</li>
        <li>{props.application.notes}</li>
        <li className="status">{props.application.status}</li>
        <li><button onClick={() => { deleteApplication() }}>x</button></li>
      </ul>
    </li>
  )
}

export default ApplicationTableRow;