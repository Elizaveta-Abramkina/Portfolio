import React from "react";
import '../../styles/heading.css'
import "../../styles/Features.css"
import email from "../../assets/features-icons/mail.png"
import monitor from "../../assets/features-icons/monitor.png"
import book from "../../assets/features-icons/book.png"
import smartphone from "../../assets/features-icons/smartphone.png"
import printer from "../../assets/features-icons/printer.png"
import pen from "../../assets/features-icons/pen.png"

const Features: React.FC = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="heading features_heading_container">
                    <h2 className="heading__title">Features</h2>
                    <p className="heading__subtitle text_type_simple">We provide a number of excellent features that
                        will
                        undoubtedly improve the <br/>user experience. We also provide a better support system
                    </p>
                </div>

                <div className="features-items-bar">
                    <div className="features-items-bar__row">
                        <div className="item">
                            <div className="item__icon item__icon_color_red"><img src={email} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">Encrypted Mail</h3>
                                <p className="item__subtitle text_type_simple">A process of encrypting email
                                    communications</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__icon item__icon_color_blue"><img src={monitor} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">Display Sharing</h3>
                                <p className="item__subtitle text_type_simple">With other participants, you may share
                                    your
                                    screen</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__icon item__icon_color_yellow"><img src={book} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">Private Notebook</h3>
                                <p className="item__subtitle text_type_simple">Private Notebook is an application that
                                    is
                                    protected</p>
                            </div>
                        </div>
                    </div>
                    <div className="features-items-bar__row">
                        <div className="item">
                            <div className="item__icon item__icon_color_green"><img src={smartphone} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">App App Assistance</h3>
                                <p className="item__subtitle text_type_simple">App Assistant is quickly and effectively
                                    ran
                                    the system</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__icon item__icon_color_pink"><img src={printer} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">Multiple Printing</h3>
                                <p className="item__subtitle text_type_simple">Our canvas prints are crafted on
                                    top-notch
                                    canvas.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__icon item__icon_color_mint"><img src={pen} alt="#"/></div>
                            <div className="item__info">
                                <h3 className="item__title text_type_title">Free Sketch</h3>
                                <p className="item__subtitle text_type_simple">Our canvas prints are crafted on
                                    top-notch
                                    canvas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;