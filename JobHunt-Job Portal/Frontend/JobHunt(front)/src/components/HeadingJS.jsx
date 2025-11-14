import '../css/Heading.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function HeadingJS(){
   let navigate=useNavigate();
  function handleLogout() {
   
    localStorage.removeItem("token");   
    localStorage.removeItem("role");    
    navigate("/");                      
  }
    return(
        <div className="head">
         <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <h3><i><Link to='/home'>JobHunt</Link></i></h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/jobseeker-dashboard/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/jobseeker-dashboard/SearchJob'>Search job</Link>
        </li>
        <li className="nav-item">
          <Link to='/jobseeker-dashboard/AppliedJob'>Applied Job</Link>
        </li>
        <li className="nav-item">
          <Link to='/jobseeker-dashboard/Profile'>Profile</Link>
        
        </li>
      
      </ul>
    </div>
  </div>
  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
</nav>
        </div>
  
    );
}

export default HeadingJS;