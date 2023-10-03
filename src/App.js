import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile"

const App = () => {

    const currentUser = true;

    const Layout = () =>{
        return (

            <div>
                <Navbar />

                <div className="flex">
                    <Leftbar />
                    <div className="w-1/2 ">
                        <Outlet />
                    </div>
                    <Rightbar />
                </div>
            </div>
        )
    }

    const ProtectedRoute = ({children}) =>{
        if(!currentUser){
            return <Navigate to='/login' />;
        }
        return children;
    }


	return(

        
        <div className="app ">
            
            
                <Routes>
                    <Route path="/" element = {
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    } >
                        <Route path="/" element = {<Home />} />
                        <Route path="/profile/:id" element = { <Profile />} />
                    </Route>
                    <Route path="/login" element = {<Login />} />
                    <Route path="/register" element = {<Register />} />
                </Routes>
                   

            {/* <Login /> */}
        </div>
        
    )
};

export default App;
