import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct } from "../src/Routes/Routes";
//import { Bounce } from "react-awesome-reveal";
import server from "./server";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(`${server}/getuser`, { withCredentials: true }) 
        .then(res => {
            console.log(res.data);
            toast.success(res.data.message);
        })
        .catch(err => toast.error(err.response?.data?.message || "An error occurred"));
    }, []);

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/productCreate" element={<CreateProduct />} />
            </Routes>
        </>
    );
}

export default App;