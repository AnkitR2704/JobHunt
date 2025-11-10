import HeadingJS from "./HeadingJS";
import MainJS from "./MainJS";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function DashboardJS(){
    return(
        <div>
            
            <HeadingJS/>
            <MainJS/>
            <Footer/>
            
        </div>
    );
}

export default DashboardJS;