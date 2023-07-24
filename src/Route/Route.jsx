import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import ErrorPage from "../Components/ErrorPage";
import AllColleges from "../Pages/Home/AllColleges";
import Admission from "../Pages/Home/Admission";
import MyCollege from "../Pages/Home/MyCollege";
import SingleCollege from "../Pages/Home/SingleCollege";
import AddCollege from "../Pages/Home/AddCollege";
import AddReview from "../Pages/Home/Home/AddReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }, 
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/college",
                element: <AllColleges></AllColleges>,
            },
            {
                path: "college/:id",
                element: <SingleCollege></SingleCollege>,
            },
            {
                path: "/admission",
                element: <Admission></Admission>,
            },
            {
                path: "/my-college",
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>,
            },
            {
                path: "addCollege/:id",
                element: <AddCollege></AddCollege>,
            },
            {
                path: "review/:id",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
            },
        ]
    }
])