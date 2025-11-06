import { useState } from "react";
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

  const putApplication = async () => {
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
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching base data: ", error.message)
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await putApplication();
    setFormData(defaultData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="position">Job Title</label>
        <input type="text" name="position" id="position" value={formData.position} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        <input type="number" name="salary" id="salary" value={formData.salary} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="notes">Notes</label>
        <input type="text" name="notes" id="notes" value={formData.notes} onChange={handleChange} />
      </div>
      
      <div>
        <label htmlFor="status">Status</label>
        <select type="text" name="status" id="status" defaultValue={formData.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>

      <div>
        <label htmlFor="starred">Starred</label>
        <input type="checkbox" name="starred" id="starred" value={formData.notes} onChange={handleChange} />
      </div>
      
      <button type="submit">Save Application</button>
    </form>
  )
}

export default NewApplicationForm;