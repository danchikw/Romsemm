import React from 'react';
import './Drinks.scss'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";
import Logo from '../../../../../assets/SideBar/Drinks.svg'

function  Drinks(props) {
    return (
        <>
            <RouteContent Logo={Logo} title="Напитки" path="drinks"/>
        </>
    );
}

export default  Drinks;