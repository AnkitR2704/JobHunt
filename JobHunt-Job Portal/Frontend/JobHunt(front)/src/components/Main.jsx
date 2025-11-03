import '../css/Main.css';
import CompanyProfile from './CompanyProfile';
import { Route,Routes } from 'react-router-dom';
import ViewApplicants from './ViewApplicants';
import ViewJob from './ViewJob';
import Home from './Home';
import PostJob from './PostJob';

function Main(){
    return(
        <div className="main">
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/postjob' element={<PostJob/>}/>
                <Route path='/viewJob' element={<ViewJob/>}/>
                <Route path='/compProf' element={<CompanyProfile/>} />   
                <Route path='/viewApplicant' element={<ViewApplicants/>} />
                
            </Routes>
        </div>
    );
}

export default Main;