import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostJob() {
  let navigate = useNavigate();

  let titleRef = useRef();
  let descRef = useRef();
  let typeRef = useRef();
  let locRef = useRef();
  let salaryRef = useRef();
  let expRef = useRef();
  let skillsRef = useRef();
  let deadlineRef = useRef();

  const saveJob = () => {
    const jobData = {
      job_title: titleRef.current.value,
      job_description: descRef.current.value,
      job_type: typeRef.current.value,
      location: locRef.current.value,
      salary: salaryRef.current.value,
      experience_required: expRef.current.value,
      skills_required: skillsRef.current.value,
      application_deadline: deadlineRef.current.value
    };

    const token = localStorage.getItem("token");
    axios.post("http://127.0.0.1:8000/api2/job/post/", jobData, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then((resp) => {
      console.log("Job Posted Successfully", resp.data);
      navigate("/employer-dashboard/jobs"); // Change to your job list page route
    })
    .catch((err) => {
      console.log("Error:", err.response.data);
    });
  };

  return (
    <form className="row g-2">
      <h3 className="mb-4 text-center"><u>Post a New Job</u></h3>

      <div className="col-md-6">
        <label className="form-label">Job Title : </label>
        <input type="text" className="form-control-sm" ref={titleRef} placeholder="Enter Job Role"/>
      </div>

      <div className="col-md-12">
        <label className="form-label">Job Description : </label>
        <textarea className="form-control-sm" rows="3" ref={descRef} placeholder="Enter Detailed Description about the Role."></textarea>
      </div>

      <div className="col-md-6">
        <label className="form-label">Job Type : </label>
        <select className="form-select-sm" ref={typeRef}>
          <option value="">--- Select Job Type ---</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label">Location : </label>
        <input type="text" className="form-control-sm" ref={locRef} placeholder="Enter Location"/>
      </div>

      <div className="col-md-6">
        <label className="form-label">Salary : </label>
        <input type="text" className="form-control-sm" ref={salaryRef} placeholder="Enter Salary Range"/>
      </div>

      <div className="col-md-6">
        <label className="form-label">Experience Required : </label>
        <input type="text" className="form-control-sm" ref={expRef} placeholder="e.g. 0-2 years" />
      </div>

      <div className="col-md-12">
        <label className="form-label">Skills Required (comma separated) : </label>
        <textarea className="form-control-sm" rows="2" ref={skillsRef} placeholder="Give the skills required for the Role"></textarea>
      </div>

      <div className="col-md-6">
        <label className="form-label">Application Deadline (optional)</label>
        <input type="date" className="form-control-sm" ref={deadlineRef} />
      </div>

      <div className="col-12 text-center mt-3">
        <button type="button" className="btn btn-primary px-3" onClick={saveJob}>
          Post Job
        </button>
      </div>
    </form>
  );
}

export default PostJob;
