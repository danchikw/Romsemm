import React, {useEffect, useState} from 'react';
import './RouteContent.scss'
import axios from "axios";
import ContentTop from "../ContentTop/ContentTop.jsx";

function RouteContent({Logo, title, path}) {
    const [array, setArray] = useState([])

    useEffect(() => {
        axios(` http://localhost:8080/${path}`)
            .then(({data}) => {
                setArray(data)
            })
    }, []);
    return (
        <section className="content">
            <ContentTop Logo={Logo} title={title}/>
            <div className="content__row">
                {array.map((item) => (
                    <div className="content__card" key={item.id}>
                        <div className='content__container-img'>
                            <img className="content__card-img" src={item.imageUrl} alt={item.name}/>
                        </div>
                        <h4 className="content__card-title">{item.name}</h4>
                        <div className="content__card-variable">
                            {path === "pizzas" ? <ul className="content__card-sizess">
                                    {item.sizes.map((arr,idx) => (
                                        <li key={arr.idx} className="content__card-size">{arr}</li>
                                    ))}
                                </ul>
                                : path==='sushi'&&path ? <p  className="content__card-ingridients">{item.ingredients.filter((item, idx) =>idx<4).join(',')}...</p>
                                    :''}
                        </div>
                        <div className="content__card-bot">
                            <p className="content__card-price" key={item.id}>{item.price} сом</p>
                            <button className="content__card-button" type="button">Хочу !</button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default RouteContent;