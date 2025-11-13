import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    job_title: "",
    description: "",
    location: "",
    salary: "",
    experience: "",
    skills_required: "",
  });

  // Fetch current job details
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://127.0.0.1:8000/api2/job/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => setJobData(resp.data))
      .catch((err) => console.error("Error fetching job:", err));
  }, [id]);

  // Handle form change
  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.put(`http://127.0.0.1:8000/api2/job/${id}/update/`, jobData, {
        headers: { Authorization: `Token ${token}` },
      });
      alert("Job updated successfully!");
      navigate("/employer-dashboard/viewJob");
    } catch (error) {
      console.error(error);
      alert("Failed to update job. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h3 className="mb-4 text-center"><u>Edit Job</u></h3>

      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input
          type="text"
          name="job_title"
          value={jobData.job_title}
          onChange={handleChange}
          required
        />
        
        <br />

        <label>Description:</label>
        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          required
        />
<br />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          required
        />
<br />
        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          value={jobData.salary}
          onChange={handleChange}
        />
<br />
        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={jobData.experience}
          onChange={handleChange}
        />
<br />
        <label>Skills Required:</label>
        <input
          type="text"
          name="skills_required"
          value={jobData.skills_required}
          onChange={handleChange}
        />
<br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditJob;
