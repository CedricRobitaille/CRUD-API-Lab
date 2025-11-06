const ApplicationTable = (props) => {

  return (
    <ul>
      {
        props.applications.map((application, index) => (
          <li key={index}>
            <p>{application.company}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default ApplicationTable;