import '../css/Heading.css';
import CompanyProfile from './CompanyProfile';
import { Link } from 'react-router-dom';

function Heading(){
    return(
        <div className="head">
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <h3><i><Link to='/employer-dashboard/home'>JobHunt</Link></i></h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/employer-dashboard/home'>Home</Link>
        </li>
        <li class="nav-item">
         <Link to='/employer-dashboard/postjob'>Post Job</Link>
        </li>
        <li class="nav-item">
          <Link to='/employer-dashboard/viewJob'>View Job</Link>
        </li>
        <li class="nav-item">
          <Link to='/employer-dashboard/viewApplicant'>View Applicants </Link>
          
        </li>
        <li class="nav-item">
          <Link to='/employer-dashboard/compProf' >Company Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Heading;