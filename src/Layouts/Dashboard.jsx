import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { FaCommentsDollar, FaFolderOpen, FaFolderPlus, FaRegIdCard, FaSchool, FaShoppingCart, FaViruses } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <h1>This is page contents</h1>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content pt-52">
            {/* Sidebar content here */}
            <li>
              <Link to="selected-classes"><FaShoppingCart></FaShoppingCart> My Selected Classes</Link>
            </li>
            <li>
              <Link to="enrolled-classes"><FaSchool></FaSchool> My Enrolled Classes</Link>
            </li>
            <li>
              <Link to="payment-history"><FaCommentsDollar></FaCommentsDollar>Payment History</Link>
            </li>
            <li>
              <Link to="add-class"><FaFolderPlus></FaFolderPlus>Add a Class</Link>
            </li>
            <li>
              <Link to="my-classes"><FaFolderOpen></FaFolderOpen>My Classes</Link>
            </li>
            <li>
              <Link to="manage-classes"><FaViruses></FaViruses>Manage Classes</Link>
            </li>
            <li>
              <Link to="manage-users"><FaRegIdCard></FaRegIdCard>Manage Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
