import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Dashboard from "../Layouts/Dashboard";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Student routes
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>
      },

      // Instructor routes
      {
        path: "add-class",
        element: <AddClass></AddClass>
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>
      },

      // Admin routes
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);