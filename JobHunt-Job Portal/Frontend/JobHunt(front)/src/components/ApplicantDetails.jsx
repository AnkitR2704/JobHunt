import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ApplicantDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`http://127.0.0.1:8000/api2/employer/applicants/${id}/`, {
      headers: { Authorization: `Token ${token}` }
    })
    .then((resp) => setDetails(resp.data))
    .catch(err => console.log(err));
  }, []);

  if (!details) return <h3 className="mt-4 text-center">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h3>{details.full_name}</h3>
      <p><b>Email:</b> {details.email}</p>
      <p><b>Contact:</b> {details.contact}</p>
      <p><b>Location:</b> {details.location}</p>
      <p><b>Skills:</b> {details.skills}</p>

      <h4 className="mt-3">Applied For: {details.job_title}</h4>
      <p><b>Company:</b> {details.company}</p>
      <p><b>Date:</b> {new Date(details.applied_at).toLocaleString()}</p>
    </div>
  );
}

export default ApplicantDetails;
