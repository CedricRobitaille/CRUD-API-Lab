import { useState } from "react";

import "./NewApplicationForm.css"

const NewApplicationForm = (props) => {

  const defaultData = {
    company: "",
    position: "",
    salary: 0,
    notes: "",
    starred: false,
    status: "Applied",
  }

  const [formData, setFormData] = useState(defaultData);
  const handleSubmit = async (event) => {
    console.log("FORM DATA:", formData)
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(error);
      }
      setFormData(defaultData);
      const data = await response.json();
      props.changeView("View Applications");
    } catch (error) {
      console.log("Error fetching base data: ", error.message)
    }
  }

  const handleChange = (event) => {
    if (event.target.contains(starred)) {
      event.target.value === "on" ? event.target.value = "true" : event.target.value = "false"
    }

    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const resetForm = async () => {
    setFormData(defaultData)
  }

  return (
    <form onSubmit={handleSubmit} className="new-application-form">
      <div className="starred-container">
        <input type="checkbox" name="starred" id="starred" onChange={handleChange} />
        <label htmlFor="starred" id="starred-label">★</label>
      </div>

      <div className="input-collection">
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} required />
      </div>

      <div className="input-collection">
        <label htmlFor="position">Job Title</label>
        <input type="text" name="position" id="position" value={formData.position} onChange={handleChange} required />
      </div>

      <div className="input-collection">
        <label htmlFor="salary">Salary</label>
        <input type="number" name="salary" id="salary" value={formData.salary} onChange={handleChange} />
      </div>

      <div className="input-collection">
        <label htmlFor="notes">Notes</label>
        <textarea type="text" name="notes" id="notes" placeholder="A few comments about this particular job posting" onChange={handleChange}>{formData.notes}</textarea>
      </div>

      <div className="input-collection">
        <label htmlFor="status">Status</label>
        <select type="text" name="status" id="status" defaultValue={formData.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>


      <div className="input-spread">
        <button type="submit">Save Application</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </div>
    </form>
  )
}

export default NewApplicationForm;