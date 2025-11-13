import '../css/Main.css';
import CompanyProfile from './CompanyProfile';
import { Route,Routes } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Searchjob from './Searchjob';
import Appliedjobs from './Appliedjobs';



function MainJS(){
    return(
        <div className="main">
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/Search job' element={<Searchjob/>}/>
                 <Route path='/Applied Jobs' element={<Appliedjobs/>} />   
                <Route path='/Profile' element={<Profile/>} />   
                
            </Routes>
        </div>
    );
}

export default MainJS;