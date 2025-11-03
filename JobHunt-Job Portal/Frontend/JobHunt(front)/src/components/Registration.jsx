import '../css/Registration.css'
import axios from 'axios';
import { useState, useRef } from 'react';
function Registration(){
    const [role,setRole] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    let post_register = (event) => {
        event.preventDefault(); 
    let data = {
        'name': nameRef.current.value,
        'email': emailRef.current.value,
        'password': passwordRef.current.value,
        'role': role,
    }
    // let post_url='http://127.0.0.1:8000/api/register/';
    // axios.post(post_url,data).then((resp)=>{
    //     console.log('success')
    // }).catch((err)=>{
    //     console.log('error')
    // }
    
    //)
    console.log(data);
    }
    return(
      <div className='full'>
        <h2>Welcome to <i><b>JOBHUNT</b></i></h2>
        <h3>Registration</h3>
    <div className='mainbox'>
    <form>
     <div className="row mb-3" >
    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputtext" ref={nameRef}/>
    </div>
  </div>   
  <div className="row mb-3" >
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" ref={emailRef}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" ref={passwordRef}/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Role</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="job_seeker" onChange={(e) => setRole(e.target.value)}  />
        <label className="form-check-label" htmlFor="gridRadios1">
          Job Seeker
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="employer" onChange={(e) => setRole(e.target.value)} />
        <label className="form-check-label" htmlFor="gridRadios2">
          Employer
        </label>
      </div>
      
    </div>
  </fieldset>
 
  <button type="submit" className="btn btn-primary" onClick={post_register}>Register</button>
</form>
    </div>
    </div>
    );
}

export default Registration;