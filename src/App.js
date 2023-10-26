import './scss/volt.scss';
import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CrearTrabajador from "./pages/CrearTrabajador";
import ListaTrabajadores from "./pages/ListaTrabajadores";
import CrearTipoContrato from "./pages/CrearTipoContrato";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/register"} element={<SignUp/>}/>
                <Route path={"/crearTrabajador"} element={<CrearTrabajador/>}/>
                <Route path={"/trabajadores"} element={<ListaTrabajadores/>}/>
                <Route path={"/crearContrato"} element={<CrearTipoContrato/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default App;
