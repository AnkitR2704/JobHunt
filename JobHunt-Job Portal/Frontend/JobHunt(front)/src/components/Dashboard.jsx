import Footer from "./Footer";
import Heading from "./Heading";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
    return(
        <div>
            
            <Heading/>
            <Main/>
            <Footer/>
            
        </div>
    );

}

export default Dashboard;