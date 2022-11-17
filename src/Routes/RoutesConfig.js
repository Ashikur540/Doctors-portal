import { Dashboard } from "../Pages/Admin/Dashboard/Dashboard";
import { Appointment } from "../Pages/Appointment/Appointment";
import Login from "../Pages/Authentication/Login/Login";
import { Register } from "../Pages/Authentication/Register/Register";
import { PrivateRoute } from "./Private/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
        ]
    }
])