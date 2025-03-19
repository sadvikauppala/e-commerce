import { useEffect, useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage,SignupPage,HomePage,CreateProduct,MyProduct,ProductDetail,Cart } from './Routes/Routes' 
//import { Bounce } from "react-awesome-reveal";
import server from './server';
import axios from 'axios';

function App() {
    const [count, setCount] = useState(0);

useEffect(()=>{
axios.get(`${server}/user/getuser`,{withCredentials:true})
.then(res=>{console.log(res.data)
    toast.success(res.data.message)
})
.catch(err=>toast.error(err.response.data.message))
},[])

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/productCreate" element={<CreateProduct/>}/>
                <Route path="/my-product" element={<MyProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
 
        </>
    );
}

export default App;