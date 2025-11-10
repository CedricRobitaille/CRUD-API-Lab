import "./MainView.css"

const MainView = ({ component, changeView, viewModal, confirmationModal }) => {

  return (
    <main>
      { component }
      { confirmationModal }
    </main>
  )
}

export default MainView;