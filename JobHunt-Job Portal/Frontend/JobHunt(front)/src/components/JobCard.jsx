import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate(); // Allows navigation

  return (
    <div className="col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          
          <h4 className="card-title">{job.job_title}</h4>
          {/* <p className="card-text">{job.description.substring(0, 100)}...</p> Short preview */}
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary || "Not specified"}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate(`/employer-dashboard/job/${job.id}`)} // Navigate to job details page
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
