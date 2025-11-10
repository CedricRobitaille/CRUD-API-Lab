const TopNav = ({ view, changeView }) => {
  return (
    <nav>
      { view === "View Applications" && <h1>Your Applications</h1> }
      { view === "View Applications" && <button className="btn-new" onClick={() => { changeView("New Application") }}>New Application</button> }
      { view === "New Application" && <h1>New Application</h1> }
      { view === "New Application" && <button className="btn-new" onClick={() => { changeView("View Applications") }}>View Applications</button> }
    </nav>
  )
}

export default TopNav;