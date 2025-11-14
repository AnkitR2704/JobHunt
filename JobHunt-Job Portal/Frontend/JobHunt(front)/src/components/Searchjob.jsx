// 


import React, { useEffect, useState } from "react";
import axios from "axios";

function Searchjob() {
  const [jobs, setJobs] = useState([]);
  const [showDetails, setShowDetails] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api2/jobs/")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const applyForJob = (id) => {
    const token = localStorage.getItem("token");
    axios
      .post(`http://127.0.0.1:8000/api2/apply-job/${id}/`, {}, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => setMessage(res.data.message))
      .catch((err) =>
        setMessage(
          err.response?.data?.message || "Error applying for job"
        )
      );
  };

  return (
    <div className="container mt-4">
      {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}
      <div className="row">
        {jobs.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow p-3" style={{ borderRadius: "15px" }}>
              <h4 className="text-primary">{item.job_title}</h4>
              <p><b>Location:</b> {item.location}</p>
              <p><b>Salary:</b> ₹{item.salary || "Not specified"}</p>

              <button
                className="btn btn-outline-success w-100 mt-2"
                onClick={() =>
                  setShowDetails(showDetails === item.id ? 0 : item.id)
                }
              >
                {showDetails === item.id ? "Hide Details" : "View Details"}
              </button>

              {showDetails === item.id && (
                <div className="mt-3">
                  <p><b>Experience Required:</b> {item.experience}</p>
                  <p><b>Description:</b> {item.description}</p>

                  <div>
                    <b>Skills:</b>
                    <ul style={{ fontSize: "14px" }}>
                      {(item.skills_required || "")
                        .split(",")
                        .map((sk, i) => (
                          <li key={i}>{sk.trim()}</li>
                        ))}
                    </ul>
                  </div>

                  {/* ✅ Apply Now button */}
                  <button
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={() => applyForJob(item.id)}
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchjob;
