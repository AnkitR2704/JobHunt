import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../css/CompanyProfile.css';

function CompanyProfile() {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://127.0.0.1:8000/api2/company-profile/get/", {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
    .then((resp) => {
      setProfile(resp.data);     // Save received data to state
      console.log("Profile Data:", resp.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });

  }, []);

  // Show loader until data arrives
  if (!profile) return <h4 className="text-center mt-5">Loading Profile...</h4>;

  return (
    <div>
      <h3 className="mb-4 text-center"><u>Company Profile</u></h3>

      <dl className="row">

        <dt className="col-sm-3">Company Name</dt>
        <dd className="col-sm-9">{profile.company_name}</dd>

        <dt className="col-sm-3">Description</dt>
        <dd className="col-sm-9">{profile.description}</dd>

        <dt className="col-sm-3">Domain/Industry</dt>
        <dd className="col-sm-9">{profile.domain}</dd>

        <dt className="col-sm-3">Location</dt>
        <dd className="col-sm-9">{profile.location}</dd>

        <dt className="col-sm-3">Website</dt>
        <dd className="col-sm-9">
          <a href={profile.website} target="_blank" rel="noreferrer">
            {profile.website}
          </a>
        </dd>

        <dt className="col-sm-3">Company Size</dt>
        <dd className="col-sm-9">{profile.company_size}</dd>

        <dt className="col-sm-3">Founded Year</dt>
        <dd className="col-sm-9">{profile.founded_year}</dd>

        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{profile.email}</dd>

        <dt className="col-sm-3">Company Contact</dt>
        <dd className="col-sm-9">{profile.contact}</dd>

      </dl>

      <div className="text-center mt-3">
        <Link className="btn btn-primary" to='/employer-dashboard/editProfile'>
          Edit Profile
        </Link>
      </div>

    </div>
  );
}

export default CompanyProfile;
