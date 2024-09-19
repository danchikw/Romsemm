import React from 'react';
import SadSmile from '../../../../../assets/Home/SadSmile.png'
import './SoonContent.scss'


function SoonContent(props) {
    return (
        <div className="soonContent">
            <h2  className="soonContent__title">У разработчика не хватило бюджета</h2>
            <p className="soonContent__subTitle">Скоро все будет !!</p>
            <img className="soonContent__sadSmile" src={SadSmile} alt="sad smile"/>
        </div>
    );
}

export default SoonContent;