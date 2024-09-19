import React from 'react';
import './Rolls.scss'
import Logo from '../../../../../assets/SideBar/Roll.svg'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";

function Rolls(props) {
    return (
       <>
           <RouteContent Logo={Logo} title="Роллы" path="rolls"/>
       </>
    );
}

export default Rolls;