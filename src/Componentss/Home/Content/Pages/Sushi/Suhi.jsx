import React from 'react';
import './Sushi.scss'
import Logo from '../../../../../assets/SideBar/Sushi.svg'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";

function Suhi(props) {
    return (
        <>
            <RouteContent Logo={Logo} title="Суши" path="sushi"/>
            <p>fd</p>
        </>
    );
}

export default Suhi;