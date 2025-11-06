import { useState, useEffect } from "react";

import TopNav from "./components/TopNav/TopNav";
import MainView from "./components/MainView/MainView";


const App = () => {
  const [applications, setApplications] = useState([]);
  const [view, setView] = useState("viewApps");

  // Initial Loading of Data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/applications`);
        if (!response.ok) {
          throw new Error(error);
        }
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.log("Error fetching base data: ", error.message)
      }
    }
    getData();
  }, [])

  const changeView = async (newView) => {
    setView(newView);
  }

 

  return (
    <>
      <TopNav changeView={changeView} view={view}/>
      <MainView view={view} applications={applications} />
    </>
  )
};

export default App;