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
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <h3><i><Link to='/home'>JobHunt</Link></i></h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/jobseeker-dashboard/home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/jobseeker-dashboard/Search job'>Search job</Link>
        </li>
        <li class="nav-item">
          <Link to='/jobseeker-dashboard/Applied job'>Applied Job</Link>
        </li>
        <li class="nav-item">
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