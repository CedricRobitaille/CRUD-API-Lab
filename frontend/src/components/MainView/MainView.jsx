import ApplicationTable from "../ApplicationTable/ApplicationTable";
import NewApplicationForm from "../NewApplicationForm/NewApplicationForm";



const MainView = (props) => {

  return (
    <>
      { props.view === "viewApps" && <ApplicationTable applications={props.applications}/> }
      { props.view === "newApp" && <NewApplicationForm />}
    </>
  )
}

export default MainView;