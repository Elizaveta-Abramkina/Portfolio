import React from "react";
import '../../styles/Service.css'
import bar from '../../assets/service-icons/bar.png'
import chart from '../../assets/service-icons/chat.png'
import layer from '../../assets/service-icons/layer.png'
import '../../styles/heading.css'

const Service = () => {

    return (
        <div className="service">
            <div className="container">
                <div className="heading heading-container">
                    <h2 className="heading__title">Service</h2>
                    <p className="heading__subtitle text_type_simple">We offer youth with chances for career development
                        in their practice. We also <br/>support a wide range of services to ensure client satisfaction
                    </p>
                </div>
                <div className="cards-bar">
                    <div className="card card-blur">
                        <img className="card__icon" src={bar} alt="#"/>
                        <div className="card__info">
                            <h3 className="card__title text_type_title">Send Texts Instantly</h3>
                            <p className="card__subtitle text_type_simple">Financial planning, forecasting and adjusting rapidly with customer demands and
                                budgets</p>
                            <a className='card__link' href=" ">Learn More</a>
                        </div>
                    </div>
                    <div className="card card-simple">
                        <img className="card__icon" src={chart} alt="#"/>
                        <div className="card__info">
                            <h3 className="card__title text_type_title">Better Organized</h3>
                            <p className="card__subtitle text_type_simple">Financial planning, forecasting and adjusting rapidly with customer demands and
                                budgets</p>
                            <a className='card__link' href=" ">Learn More</a>
                        </div>
                    </div>
                    <div className="card card-blur">
                        <img className="card__icon" src={layer} alt="#"/>
                        <div className="card__info">
                            <h3 className="card__title text_type_title">Analytical Statistics</h3>
                            <p className="card__subtitle text_type_simple">Financial planning, forecasting and adjusting rapidly with customer demands and
                                budgets</p>
                            <a className='card__link' href=" ">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;