import React from 'react';
import Header from "../Content/Header/Header.jsx";
import {Outlet} from "react-router-dom";

function Leyout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Leyout;