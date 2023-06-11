import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import SideBar from "../pages/Shared/Sidebar/SideBar";


const Dashboard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;