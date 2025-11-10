import { useState, useEffect } from "react";

import TopNav from "./components/TopNav/TopNav";
import MainView from "./components/MainView/MainView";
import ApplicationTable from "./components/ApplicationTable/ApplicationTable";
import NewApplicationForm from "./components/NewApplicationForm/NewApplicationForm";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";


const App = () => {
  const [applications, setApplications] = useState([]);
  const [view, setView] = useState({ title: "loading", component: "" });

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
        setView({ title: "View Applications", component: <ApplicationTable changeView={changeView} applications={data} toggleConfirmationModal={toggleConfirmationModal} /> })
      } catch (error) {
        console.log("Error fetching base data: ", error.message)
      }
    }
    getData();
  }, [])


  const loadApplications = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/applications`);
      if (!response.ok) {
        throw new Error(error);
      }
      const data = await response.json();
      setApplications(data);
      setView({ title: "View Applications", component: <ApplicationTable changeView={changeView} applications={data} toggleConfirmationModal={toggleConfirmationModal} /> })
    } catch (error) {
      console.log("Error fetching base data: ", error.message)
    }
  }

  // Change the MainView state
  const changeView = async (newView) => {
    if (newView === "View Applications") {
      loadApplications();
    }
    if (newView === "New Application") {
      setView({ title: "New Application", component: <NewApplicationForm changeView={changeView} />});
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState()

  const toggleConfirmationModal = async (application) => {
    setIsModalVisible((prevVisible) => {
      const nextVisible = !prevVisible;

      if (nextVisible) {
        setConfirmationModal(
          <ConfirmationModal
            application={application}
            toggleConfirmationModal={toggleConfirmationModal}
            changeView={changeView}
          />
        );
      } else {
        setConfirmationModal(null);
      }

      return nextVisible;
    });
  }



  useEffect(() => {
    console.log('Modal visible changed:', isModalVisible);
  }, [isModalVisible]);

  return (
    <>
      <TopNav changeView={changeView} view={view.title}/>
      <MainView component={view.component} confirmationModal={confirmationModal} />
    </>
  )
};

export default App;