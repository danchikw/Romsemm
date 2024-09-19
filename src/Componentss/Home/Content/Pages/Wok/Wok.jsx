import React from 'react';
import './Wok.scss'
import Logo from '../../../../../assets/SideBar/wok.svg'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";

function Wok(props) {
    return (
        <>
            <RouteContent Logo={Logo} title="Wok" path="wok"/>
        </>
    );
}

export default Wok;