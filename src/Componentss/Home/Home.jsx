import React from 'react';
import './Home.scss'
import SideBar from "./SideBar/SideBar.jsx";
import Content from "./Content/Content.jsx";
import Card from "./Card/Card.jsx";
function Home() {
    return (
        <section className="home">
            <SideBar/>
            <Content/>
            <Card/>
        </section>
    );
}

export default Home;