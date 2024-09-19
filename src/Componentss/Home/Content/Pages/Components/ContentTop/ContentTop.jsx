import React from 'react';
import './ContentTop.scss'

function ContentTop({title,Logo}) {
    return (
        <section className="content">
            <div className="contentTop">
                <div className="contentTop__left">
                    <img className="contentTop__img" src={Logo} alt={title}/>
                    <h2 className="contentTop__name">{title}</h2>
                </div>
                <div className="contentTop__sort">
                    <p className="contentTop__title">Сортировка</p>
                    <p className="contentTop__default">По умолчанию <span className="contentTop__default-icon" >f f</span></p>
                    <ul className="contentTop__sort-list">
                        <li className="contentTop__sort-item">Название</li>
                        <li className="contentTop__sort-item">Сначала дешевле</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ContentTop;