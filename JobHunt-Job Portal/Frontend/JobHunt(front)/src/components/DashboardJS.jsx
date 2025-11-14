import HeadingJS from "./HeadingJS";
import MainJS from "./MainJS";
import Footer from "./Footer";


function DashboardJS() {
    return (
        <div className="dashboard-container">
            <HeadingJS />
            <main className="dashboard-main">
                <MainJS />
            </main>
            <Footer />
        </div>
    );
}

export default DashboardJS;


