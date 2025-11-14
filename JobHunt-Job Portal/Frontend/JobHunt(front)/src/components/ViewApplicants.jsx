

// function ViewApplicants(){
//     return(
//         <div>
//           <h3>APPLIED APPLICANTS</h3>
//             <div className="card text-center mb-3"  style={{ width: "18rem" }}>
//             <div className="card-body">
//                 <h5 className="card-title">Kiran Kumar</h5>
//                 <h6 className="card-title">Software Developer</h6>
//                 <a href="#" className="btn btn-primary">View Details</a>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default ViewApplicants;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewApplicants() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://127.0.0.1:8000/api2/employer/applicants/", {
      headers: { Authorization: `Token ${token}` }
    })
    .then((resp) => {
      setApplicants(resp.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <h3 className="mt-4 text-center">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Applicants for Your Jobs</h2>

      {applicants.length === 0 ? (
        <h5 className="text-muted text-center">No applicants yet.</h5>
      ) : (
        <div className="row">
          {applicants.map((app) => (
            <div className="col-md-4 mb-3" key={app.id}>
              <div className="card shadow p-3">
                <h4>{app.full_name}</h4>
                <p><b>Applied for:</b> {app.job_title}</p>
                <p><b>Email:</b> {app.email}</p>
                <p><b>Contact:</b> {app.contact}</p>

                <Link
                  className="btn btn-primary w-100 mt-2"
                  to={`/employer-dashboard/applicant/${app.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewApplicants;
