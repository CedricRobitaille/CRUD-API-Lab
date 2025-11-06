import ApplicationTable from "../ApplicationTable/ApplicationTable";
import NewApplicationForm from "../NewApplicationForm/NewApplicationForm";



const MainView = (props) => {

  return (
    <>
      {props.view === "viewApps" && <ApplicationTable changeView={props.changeView} applications={props.applications}/> }
      {props.view === "newApp" && <NewApplicationForm changeView={props.changeView} />}
    </>
  )
}

export default MainView;