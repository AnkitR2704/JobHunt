import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProfile() {
  let navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState(null);

  // ✅ Fetch existing job seeker profile data
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://127.0.0.1:8000/api2/jobseeker-profile/get/", {
      headers: { Authorization: `Token ${token}` }
    })
    .then(res => {
      setFullName(res.data.full_name || "");
      setEmail(res.data.email || "");
      setContact(res.data.contact || "");
      setLocation(res.data.location || "");
      setEducation(res.data.education || "");
      setExperience(res.data.experience || "");
      setSkills(res.data.skills || "");
    })
    .catch(err => console.log("Error fetching job seeker data:", err));
  }, []);

  // ✅ Save updated data
  const SaveData = () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("location", location);
    formData.append("education", education);
    formData.append("experience", experience);
    formData.append("skills", skills);
    if (resume) formData.append("resume", resume);

    axios.post("http://127.0.0.1:8000/api2/jobseeker-profile/save/", formData, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(() => navigate('/jobseeker-dashboard/profile'))
    .catch(err => console.log("Save Error:", err.response?.data || err));
  };

  return (
    <form className="row g-2">
      <h4 className="text mb-4"><u>Edit Job Seeker Profile</u></h4>

      <div className="col-md-6">
        <label className="form-label">Full Name :</label>
        <input
          type="text"
          className="form-control-sm"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Email :</label>
        <input
          type="email"
          className="form-control-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Contact Number :</label>
        <input
          type="text"
          className="form-control-sm"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Location :</label>
        <input
          type="text"
          className="form-control-sm"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="col-md-9">
        <label className="form-label">Education :</label>
        <textarea
          className="form-control"
          rows="2"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        ></textarea>
      </div>

      <div className="col-md-9">
        <label className="form-label">Experience :</label>
        <textarea
          className="form-control"
          rows="2"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>
      </div>

      <div className="col-md-9">
        <label className="form-label">Skills :</label>
        <textarea
          className="form-control"
          rows="2"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        ></textarea>
      </div>

      <div className="col-md-9">
        <label className="form-label">Resume (PDF/DOC) :</label>
        <input
          type="file"
          className="form-control-sm"
          onChange={(e) => setResume(e.target.files[0])}
        />
      </div>

      <div className="col-12 text-center mt-3">
        <button
          className="btn btn-primary px-5"
          type="button"
          onClick={SaveData}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProfile;
