import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://127.0.0.1:8000/api2/job/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => setJob(resp.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Delete job
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://127.0.0.1:8000/api2/job/${id}/delete/`, {
        headers: { Authorization: `Token ${token}` },
      });
      alert("Job deleted successfully!");
      navigate("/employer-dashboard/viewJob"); // Go back to job list
    } catch (error) {
      console.error(error);
      alert("Failed to delete job. Please try again.");
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.job_title}</h2>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary || "Not specified"}</p>
      <p><strong>Experience Required:</strong> {job.experience}</p>
      <p><strong>Skills Required:</strong> {job.skills_required}</p>

      {localStorage.getItem("role") === "employer" && (
        <div style={{ marginTop: "20px" }}>
          <button
            className="btn btn-warning me-3"
            onClick={() => navigate(`/employer-dashboard/edit-job/${job.id}`)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
