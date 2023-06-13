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
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

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
        element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
      },
      {
        path: "enrolled-classes",
        element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
      },
      {
        path: "payment/:id",
        element: <StudentRoute><Payment></Payment></StudentRoute>
      },
      {
        path: "payment-history",
        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
      },

      // Instructor routes
      {
        path: "add-class",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: "my-classes",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },

      // Admin routes
      {
        path: "manage-classes",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "manage-users",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);