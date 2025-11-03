import Footer from "./Footer";
import Heading from "./Heading";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <BrowserRouter>
            <Heading/>
            <Main/>
            <Footer/>
            </BrowserRouter>
        </div>
    );

}

export default Dashboard;