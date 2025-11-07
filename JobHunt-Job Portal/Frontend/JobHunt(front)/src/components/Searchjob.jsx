import React from "react";
import { jobDetails } from "./db";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
/>;

function Searchjob() {
  const [showDetails, setShowDetails] = React.useState(0);

  // function showDetails(id) {
  //   document.getElementById(id).style.display = "block";
  // }
  //     return(
  //         <div>
  //           <h3>Search Job</h3>
  //             <div class="row">
  //   <div class="col-sm-6 mb-3 mb-sm-0">
  //     <div class="card">
  //       <div class="card-body">
  //         <h4 class="card-title">Python Developer</h4>
  //         <h6>Company: Infosys</h6>
  //         <p><b>Location:</b> Chennai</p>
  //         <p><b>Salary:</b>2 to 4 LPA</p>
  //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //         <a href="#" class="btn btn-primary">View Details</a>  <a href="#" class="btn btn-primary">Apply</a>
  //       </div>
  //     </div>
  //   </div>
  //   <p>Posted 3 days ago</p>
  //   <div class="col-sm-6">
  //     <div class="card">
  //       <div class="card-body">
  //         <h4 class="card-title">FullStack Developer</h4>
  //         <h6>Company: TCS</h6>
  //         <p><b>Location:</b>📍 Hyderabad</p>
  //         <p><b>Salary:</b>3 to 6 LPA</p>
  //         <div id="detail1" style={{display:"none"}}>
  //           <p><b>Experience:</b>0 to 2Years</p>
  //           <p><b>Skills:</b> Python, Django, REST API, MYSQL</p>
  //           <p><b>Employement type:</b>Full Time, Permanent</p>
  //           <p><b>Education:</b>Any Graduate</p>
  //           <p><b>About TCS:</b>TCS (Tata Consultancy Services) is one of the largest IT companies in the world. It is a part of the Tata Group (India’s biggest business group). TCS provides IT services, consulting, business solutions and digital transformation for companies across different industries.</p>

  //         </div>
  //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //         <a onClick={() => showDetails("detail1")} className="btn btn-primary">View Details</a>  <a href="#" class="btn btn-primary">Apply</a>
  //       </div>
  //     </div>
  //   </div>
  //   <p>Posted 5 days ago</p>
  //   <div class="col-sm-6">
  //     <div class="card">
  //       <div class="card-body">
  //         <h4 class="card-title">Nodejs Developer</h4>
  //         <h6>Company:SoftClouds</h6>
  //         <p><b>Location:</b> Hyderabad</p>
  //         <p><b>Salary:</b>2.5 to 8 LPA</p>
  //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //         <a onClick={"showDetails()"} class="btn btn-primary">View Details</a>  <a href="#" class="btn btn-primary">Apply</a>
  //       </div>
  //     </div>
  //   </div>
  //   <p>Posted 4hrs ago</p>
  // </div>
  //         </div>
  //     );
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {jobDetails.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div
                className="card shadow-lg p-3"
                style={{ borderRadius: "15px" }}
              >
                <h4 className="text-primary">{item.role}</h4>
                <p>
                  <b>Location:</b> {item.location}
                </p>
                <p>
                  <b>Experience:</b> {item.experience}
                </p>
                <p>
                  <b>Salary:</b> {item.salary}
                </p>

                <div
                  className="btn btn-outline-success w-100 mt-2 d-flex align-items-center justify-content-center gap-2"
                  onClick={() =>
                    setShowDetails(showDetails === item.id ? 0 : item.id)
                  }
                >
                  {showDetails == item.id ? (
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  )}
                  {showDetails == item.id ? (
                    "hide Details"
                  ) : (
                    <i className="bi bi-eye">View Details</i>
                  )}
                </div>

                <div
                  style={{ display: showDetails == item.id ? "block" : "none" }}
                >
                  <p>
                    <b>Employment:</b> {item.employmentType}
                  </p>

                  <p style={{ fontSize: "14px" }}>
                    <b>Description:</b> {item.descrpition}
                  </p>

                  <div>
                    <b>Skills:</b>
                    <ul style={{ fontSize: "14px" }}>
                      {item.skills.map((sk, i) => (
                        <li key={i}>{sk}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="btn btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center gap-2">
                    <span className="material-symbols-outlined">touch_app</span>
                    <p className="m-0">Click here to Apply</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Searchjob;
