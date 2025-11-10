import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditCompanyProfile() {
  let navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [domain, setDomain] = useState("");
  const [location, setLocation] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // Fetch existing company profile data
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://127.0.0.1:8000/api2/company-profile/get/", {
      headers: { Authorization: `Token ${token}` }
    }).then(res => {
      setCompanyName(res.data.company_name || "");
      setDescription(res.data.description || "");
      setDomain(res.data.domain || "");
      setLocation(res.data.location || "");
      setCompanySize(res.data.company_size || "");
      setFoundedYear(res.data.founded_year || "");
      setWebsite(res.data.website || "");
      setEmail(res.data.email || "");
      setContact(res.data.contact || "");
    }).catch(err => console.log(err));
  }, []);

  const SaveData = () => {
    const obj = {
      company_name: companyName,
      description: description,
      domain: domain,
      location: location,
      company_size: companySize,
      founded_year: foundedYear,
      website: website,
      email: email,
      contact: contact
    };

    const token = localStorage.getItem("token");
    axios.post("http://127.0.0.1:8000/api2/company-profile/save/", obj, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      }
    })
      .then(() => navigate('/employer-dashboard/compProf'))
      .catch(err => console.log(err.response.data));
  };

  return (
    <form className="row g-2">
      <h4 className="text mb-4"><u>Edit Company Profile</u></h4>

      <div className="col-md-6">
        <label className="form-label">Company Name :</label>
        <input type="text" className="form-control-sm"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)} />
      </div>

      <div className="col-md-9">
        <label className="form-label">Description :</label>
        <textarea className="form-control" rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="col-md-6">
        <label className="form-label">Domain :</label>
        <select className="form-select-sm"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}>
          <option value="">---- Select Domain ----</option>
          <option>Software Development</option>
          <option>Testing</option>
          <option>Management</option>
          <option>Non IT</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label">Location :</label>
        <input type="text" className="form-control-sm"
          value={location}
          onChange={(e) => setLocation(e.target.value)} />
      </div>

      <div className="col-md-6">
        <label className="form-label">Company Size :</label>
        <select className="form-select-sm"
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}>
          <option value="">---- Select Number of Employees ----</option>
          <option>1-10</option>
          <option>10-50</option>
          <option>50-100</option>
          <option>100-200</option>
          <option>200+</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label">Founded Year :</label>
        <input type="number" className="form-control-sm"
          value={foundedYear}
          onChange={(e) => setFoundedYear(e.target.value)} />
      </div>

      <div className="col-md-6">
        <label className="form-label">Website URL :</label>
        <input type="url" className="form-control-sm"
          value={website}
          onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div className="col-md-6">
        <label className="form-label">Email :</label>
        <input type="email" className="form-control-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="col-md-6">
        <label className="form-label">Contact Phone :</label>
        <input type="number" className="form-control-sm"
          value={contact}
          onChange={(e) => setContact(e.target.value)} />
      </div>

      <div className="col-12 text-center mt-3">
        <button className="btn btn-primary px-5" type="button" onClick={SaveData}>
          Save
        </button>
      </div>
    </form>
  );
}

export default EditCompanyProfile;
