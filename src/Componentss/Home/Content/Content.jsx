import React from 'react';
import './Content.scss'
import Header from "./Header/Header.jsx";
import {Routes, Route} from "react-router-dom";
import Pizza from "./Pages/Pizza/Pizza.jsx";
import Sets from "./Pages/Sets/Sets.jsx";
import Wok from "./Pages/Wok/Wok.jsx";
import Rolls from "./Pages/Rolls/Rolls.jsx";
import Suhi from "./Pages/Sushi/Suhi.jsx";
import Salads from "./Pages/Salads/Salads.jsx";
import Soup from "./Pages/Soup/Soup.jsx";
import CornDog from "./Pages/CornDog/CornDog.jsx";
import Drinks from "./Pages/Drinks/Drinks.jsx";
import Sale from "./Pages/Sale/Sale.jsx";
import Home from "../Home.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import SoonContent from "./Pages/SoonContent/SoonContent.jsx";
import Leyout from "../Leuout/Leyout.jsx";

function Content(props) {
    return (
        <section className="home__content">
            <Header/>
            <div className="home__content__container">
                <Routes>
                        <Route path='/pizza' element={<Pizza/>}/>
                        <Route path="/sets" element={<Sets/>}/>
                        <Route path="/wok" element={<Wok/>}/>
                        <Route path="/rolls" element={<Rolls/>}/>
                        <Route path="/sushi" element={<Suhi/>}/>
                        <Route path="/salads" element={<Salads/>}/>
                        <Route path="/soup" element={<Soup/>}/>
                        <Route path="/corndog" element={<CornDog/>}/>
                        <Route path="/drinks" element={<Drinks/>}/>
                        <Route path="/sale" element={<Sale/>}/>
                        <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </section>
    );
}

export default Content;