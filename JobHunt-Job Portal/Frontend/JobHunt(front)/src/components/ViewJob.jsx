import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard"; // import the JobCard component

function ViewJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://127.0.0.1:8000/api2/job/list/", {  // Fetch all jobs
      headers: { Authorization: `Token ${token}` }
    })
    .then(resp => setJobs(resp.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="row">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default ViewJob;
