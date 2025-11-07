import { useState,useEffect } from "react";
import '../css/profile.css'
function Profile(){
    return(
        <div className="Name">
              <strong>Personal Information</strong><br /> <br />
            <div className="Jobseeker">  
            <label htmlFor=""> FullName
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">Email
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">
                Phone Number
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">
                Address
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">
                Profile Picture
            <input type="file" accept="image/*" />
            </label> <br />  <br />
            <strong>Education Details</strong> <br /> <br />
            
             <label htmlFor="">Highest Qualification</label><br /><select name="qualification" id="qualification">
            <option value="">-- Select Qualification --</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="B.Sc">B.Sc</option>
            </select><br /><br />
            <label htmlFor="">
                College University
            <input type="text" />
            </label><br /> <br />
            <label htmlFor="">Graduation year</label>
            <select id="year" name="year">
            <option value="">-- Select Year --</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            </select> <br /> <br />
            <label htmlFor="">
                Percentage/CGPA
            <input type="text" />
            </label> <br /> <br />
            <strong>Experience Details</strong><br /> <br />
            <label htmlFor="">Years of Experience
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">
                Previous Company Name
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor="">Role/Designation
            <input type="text" />
            </label><br /> <br />
            <label htmlFor="">Skills Used
            <input type="text" />
            </label><br /> <br />
            <strong>Skills</strong> <br /> <br />
            <label htmlFor="">
                Technical Skills
            <input type="text" />
            </label><br /> <br />
            <label htmlFor="">
                Soft Skills
            <input type="text" />
            </label> <br /> <br />
            <label htmlFor=""> Resume    
            <input type="file" id="pdf" />
            </label> <br /> <br />
            <label htmlFor="">
                Description
            </label>
            </div>
            <button className="submit">Submit</button>  
        </div>
              
    );
}
export default Profile;