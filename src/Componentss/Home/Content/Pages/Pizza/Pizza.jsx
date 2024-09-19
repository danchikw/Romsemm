import React, {useEffect, useState} from 'react';
import './Pizza.scss'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";
import Logo from "../../../../../assets/SideBar/Drinks.svg";

function Pizza() {
    return (

            <>
                <RouteContent Logo={Logo} title="Пицца" path="pizzas"/>
            </>
    );
}

export default Pizza;