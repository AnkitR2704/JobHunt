import { useEffect, useState } from "react";
import axios from "axios";

function AppliedJob() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      setLoading(false);
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api2/applied-jobs/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        console.log("Applied Jobs:", resp.data);  // DEBUG
        setAppliedJobs(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err.response?.data || err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Applied Jobs</h3>

      {appliedJobs.length === 0 ? (
        <h5 className="text-center text-muted">No jobs applied yet</h5>
      ) : (
        <div className="row">
          {appliedJobs.map((job) => (
            <div className="col-md-4" key={job.id}>
              <div className="card shadow p-3 mb-3">
                <h4>{job.job_title}</h4>
                <p><b>Company:</b> {job.company}</p>
                <p><b>Location:</b> {job.location}</p>
                <p><b>Salary:</b> {job.salary}</p>
                <p><b>Skills:</b> {Array.isArray(job.skills) ? job.skills.join(", ") : job.skills}</p>

                <p className="text-muted" style={{ fontSize: "13px" }}>
                  Applied on: {new Date(job.applied_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppliedJob;
