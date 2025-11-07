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
        let url='http://127.0.0.1:8000/api2/login/';
        try{
            console.log(data)
            const resp = await axios.post(url,data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(resp)
            console.log('success')
            console.log(resp.data)
             // Save token and role for later use
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('role', resp.data.role);

            // Redirect based on role
            if (resp.data.role === 'employer') {
                console.log('employer dashboard')
                navigate('/employer-dashboard/home');
            } else if (resp.data.role === 'job_seeker') {
                console.log('job seeker dashboard')
                navigate('/jobseeker-dashboard');
            } else {
                navigate('/');
            }
            }catch{
                console.log('failed')
                 }  
    }
    return(
      <div>
        <h2>Welcome to <b><i>JOBHUNT</i></b></h2>
        <h3>Login</h3>
        <div className='login'>
            <input type="text" placeholder='Enter your username' ref={usernameRef}/>
            <input type="password" placeholder='Enter your password' ref={pswrdRef}/>
           
            <button onClick={post_data}>Log In</button><br /><br />
            &nbsp; &nbsp; &nbsp; &nbsp;Need an Account?<Link to='/register'>Create New Account.</Link>
            
        </div>
        </div>
    );
}
export default Login;
