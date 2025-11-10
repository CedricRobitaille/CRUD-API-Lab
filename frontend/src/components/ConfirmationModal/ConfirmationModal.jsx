import "./ConfirmationModal.css"

const ConfirmationModal = (props) => {

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
      props.changeView("View Applications");
      props.toggleConfirmationModal();
    } catch (error) {
      props.changeView("View Applications");
      props.toggleConfirmationModal();
      console.log("Error fetching base data: ", error.message)
    }
  }


  return (
    <div className="confirmation-modal">
      <h3>Delete this job application</h3>
      <p>Are you sure you would like to delete this application? This action cannot be reversed.</p>
      <ul>
        <li><button onClick={ deleteApplication }>Confirm</button></li>
        <li><button onClick={ props.toggleConfirmationModal }>Cancel</button></li>
      </ul>
      
    </div>
  )
}

export default ConfirmationModal