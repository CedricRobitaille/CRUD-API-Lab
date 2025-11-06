const TopNav = (props) => {
  return (
    <nav>
      { props.view === "viewApps" && <h1>Your Applications</h1> }
      { props.view === "newApp" && <h1>New Application</h1> }
      <button onClick={() => { props.changeView("newApp") }}>New Application</button>
    </nav>
  )
}

export default TopNav;