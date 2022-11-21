import { ManageDoctors } from "../../src/Pages/Admin/Manage Doctors/ManageDoctors";
import DashboardLayout from "../Layouts/DashboardLayout";
import { AddDoc } from "../Pages/Admin/AddDoctor/AddDoc";
import AllUsers from "../Pages/Admin/Allusers/AllUsers";
import { Dashboard } from "../Pages/Admin/Dashboard/Dashboard";
import Myappointments from "../Pages/Admin/Myappointments/Myappointments";
import { Appointment } from "../Pages/Appointment/Appointment";
import Login from "../Pages/Authentication/Login/Login";
import { Register } from "../Pages/Authentication/Register/Register";
import { Payment } from "../Pages/Payment/Payment";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import { AdminRoute } from "./Admin/AdminRoute";
import { PrivateRoute } from "./Private/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home/Home");
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/appointment",
                element: <Appointment />
            },

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Myappointments />,
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers /> </AdminRoute>,
            },
            {
                path: "/dashboard/adddoctor",
                element: <AdminRoute><AddDoc></AddDoc> </AdminRoute>,
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors> </AdminRoute>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment> </AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },

])