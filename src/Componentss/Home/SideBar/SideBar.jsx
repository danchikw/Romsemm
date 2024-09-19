import React from 'react';
import './SideBar.scss'
import Logo from '../../../assets/Home/logo.svg'
import {Link, NavLink} from "react-router-dom";
import Pizza from '../../../assets/SideBar/Pizza.svg'
import Set from '../../../assets/SideBar/Set.svg'
import Wok from '../../../assets/SideBar/wok.svg'
import Sale from '../../../assets/SideBar/Sale.svg'
import Salad from '../../../assets/SideBar/Salad.svg'
import Sushi from '../../../assets/SideBar/Sushi.svg'
import Soup from '../../../assets/SideBar/Soup.svg'
import Roll from '../../../assets/SideBar/Roll.svg'
import CornDog from '../../../assets/SideBar/CornDog.svg'
import Drinks from '../../../assets/SideBar/Drinks.svg'
import Soon from "./Soon/Soon.jsx";

function SideBar() {
    return (
        <aside className="home__sideBar">
            <NavLink to="/" className="home__sideBar__top">
                <img className="home__sideBar__logo" src={Logo} alt="Logo romsem"/>
                <h1 className="home__sideBar__title">ROMSEM</h1>
            </NavLink>
            <ul className="home__sideBar__list">
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Pizza} alt=""/>
                    <NavLink className="home__sideBar__link" to='/pizza'>Пицца</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Set} alt=""/>
                    <NavLink className="home__sideBar__link" to="/sets">Сеты</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Wok} alt=""/>
                    <NavLink className="home__sideBar__link" to="/wok">WOK</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Roll} alt=""/>
                    <NavLink className="home__sideBar__link" to="/rolls">Роллы</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Sushi} alt=""/>
                    <NavLink className="home__sideBar__link" to="/sushi">Суши</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Salad} alt=""/>
                    <NavLink className="home__sideBar__link" to="/salads">Салаты</NavLink>
                    <Soon/>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Soup} alt=""/>
                    <NavLink className="home__sideBar__link" to="/soup">Супы</NavLink>
                    <Soon/>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={CornDog} alt=""/>
                    <NavLink className="home__sideBar__link" to="/corndog">Корн доги</NavLink>
                    <Soon/>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Drinks} alt=""/>
                    <NavLink className="home__sideBar__link" to="/drinks">Напитки</NavLink>
                </li>
                <li className="home__sideBar__list-item">
                    <img className="home__sideBar__list-img" src={Sale} alt=""/>
                    <NavLink className="home__sideBar__link" to="/sale">Акции</NavLink>
                    <Soon/>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;