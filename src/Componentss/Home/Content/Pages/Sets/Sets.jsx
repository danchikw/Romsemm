import React from 'react';
import './Sets.scss'
import Logo from '../../../../../assets/SideBar/Set.svg'
import RouteContent from "../Components/RoyteContent/RouteContent.jsx";

function Sets(props) {
    return (
        <div>
            <RouteContent Logo={Logo} title="Сеты" path="sets"/>

        </div>
    );
}

export default Sets;