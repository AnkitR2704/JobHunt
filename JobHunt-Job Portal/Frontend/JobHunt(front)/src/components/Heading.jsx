import '../css/Heading.css';
import CompanyProfile from './CompanyProfile';
import { Link } from 'react-router-dom';

function Heading(){
    return(
        <div className="head">
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3><i><Link to='/home'>JobHunt</Link></i></h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" ><Link to='/home'>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to='/postjob'>Post Job</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to='/viewJob'>View Job</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to='/viewApplicant'>View Applicants </Link></a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to='/compProf' >Company Profile</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Heading;