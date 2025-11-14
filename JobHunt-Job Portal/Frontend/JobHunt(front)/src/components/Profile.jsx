import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    resume: null,
  });

  // Fetch jobseeker profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/api2/jobseeker-profile/get/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        setProfile(res.data);
        setFormData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setProfile(null); // no profile exists yet
        } else {
          console.error("Error fetching profile:", err);
        }
      });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Save / Update profile
  const handleSave = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    axios
      .post("http://127.0.0.1:8000/api2/jobseeker-profile/save/", formDataToSend, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setProfile(res.data);
        setIsEditing(false);
      })
      .catch((err) => console.error("Error saving profile:", err));
  };

  // If no profile → show form directly
  if (!profile || isEditing) {
    return (
      <div className="container mt-4">
        <h3>{profile ? "Edit Job Seeker Profile" : "Create Job Seeker Profile"}</h3>
        <form onSubmit={handleSave} className="row g-3 mt-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Skills</label>
            <textarea
              className="form-control"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label">Experience</label>
            <input
              type="text"
              className="form-control"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Education</label>
            <input
              type="text"
              className="form-control"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Resume</label>
            <input
              type="file"
              className="form-control"
              name="resume"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-primary px-4">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  // If profile exists → show details
  return (
    <div>
     <h3 ><u>Job Seeker Profile</u></h3>
    
     
      <dl className="row">
        <dt className="col-sm-3">Full Name</dt>
        <dd className="col-sm-9">{profile.full_name}</dd>

        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{profile.email}</dd>

        <dt className="col-sm-3">Contact</dt>
        <dd className="col-sm-9">{profile.contact || "—"}</dd>

        <dt className="col-sm-3">Location</dt>
        <dd className="col-sm-9">{profile.location || "—"}</dd>

        <dt className="col-sm-3">Skills</dt>
        <dd className="col-sm-9">{profile.skills || "—"}</dd>

        <dt className="col-sm-3">Experience</dt>
        <dd className="col-sm-9">{profile.experience || "—"}</dd>

        <dt className="col-sm-3">Education</dt>
        <dd className="col-sm-9">{profile.education || "—"}</dd>

        <dt className="col-sm-3">Resume</dt>
        <dd className="col-sm-9">
          {profile.resume ? (
            <a
              href={`http://127.0.0.1:8000${profile.resume}`}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          ) : (
            "Not uploaded"
          )}
        </dd>
      </dl>

      <div className="text-center mt-3">
        <button
          className="btn btn-primary"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      </div>
    </div>
    
  );
}

export default Profile;
