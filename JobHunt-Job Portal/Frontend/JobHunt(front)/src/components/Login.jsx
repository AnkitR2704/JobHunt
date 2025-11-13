import '../css/Login.css'
import { useNavigate, Link } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
function Login(){
    let usernameRef = useRef();
    let pswrdRef = useRef();
    let navigate = useNavigate();
    let post_data = async () => {
        let data={
            'username':usernameRef.current.value,
            'password':pswrdRef.current.value,
        }
        let url = 'http://127.0.0.1:8000/api2/login/';

axios.post(url, data, {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})
.then((resp) => {
  localStorage.setItem("token", resp.data.token);
  localStorage.setItem("role", resp.data.role);

  if (resp.data.role === 'employer') {
    navigate('/employer-dashboard/home');
  } else if (resp.data.role === 'job_seeker') {
    navigate('/jobseeker-dashboard/home');
  } else {
    navigate('/');
  }
})
.catch((err) => {
  console.log("Login Error:", err.response?.data || err.message);
});

    }
    return(
    //   <div>
    //     <h2>Welcome to <b><i>JOBHUNT</i></b></h2>
    //     <h3>Login</h3>
    //     <div className='login'>
    //         <input type="text" placeholder='Enter your username' ref={usernameRef}/>
    //         <input type="password" placeholder='Enter your password' ref={pswrdRef}/>
           
    //         <button onClick={post_data}>Log In</button><br /><br />
    //         &nbsp; &nbsp; &nbsp; &nbsp;Need an Account?<Link to='/register'>Create New Account.</Link>
            
    //     </div>
    //     </div>
    <div className="login-container">
  <h2>Welcome to <b><i>JOBHUNT</i></b></h2>
  <figure class="text-center">
  <blockquote class="blockquote">
    <p>Helping you discover the career you deserve.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    JobHunt <cite title="Source Title"></cite>
  </figcaption>
</figure>
  <h3><u>Login</u></h3>

  <div className="login-box">
      <input type="text" placeholder="Enter your username" ref={usernameRef}/>
      <input type="password" placeholder="Enter your password" ref={pswrdRef}/>
      <button onClick={post_data}>Log In</button>

      <p className="register-text">
        Need an Account? <Link to='/register'>Create New Account</Link>
      </p>
  </div>
</div>

    );
}
export default Login;
