import { useState, useEffect } from "react";

const App = () => {
  const [applicationList, setApplications] = useState([]);

  // Initial Loading of Data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:3000/api/applications`);
      const data = await response.json();

      setApplications(data);
    }

    getData();
  }, [])

  // Funtion to load more data
  const getApplications = async (endpoint) => {
    try {
      let route = "applications"
      const response = await fetch(`http://localhost:3000/api/${route}`)
      if (!response.ok) {
        throw new Error("Bad network response")
      }

      const data = await response.json();
      console.log(`Fetched data from /api/${route}: `, data);
      
      setApplications(data);
    } catch (error) {
      console.log(`An error occured when fetching data from ${endpoint}: `, error.message)
    }
  }

  return (
    <>
      <h1>Applications</h1>
      <button onClick={getApplications}>GET</button>
      <ul>
        {
          applicationList.map((application, index) => (
            <li key={index}>
              <p>{application.company}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default App;