import ApplicationTable from "../ApplicationTable/ApplicationTable";

const MainView = (props) => {
  return (
    <>
      <ApplicationTable applications={props.applications}/>
    </>
  )
}

export default MainView;