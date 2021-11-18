import React from "react";
import Header from "../Components/Header/Header";
import Intro from "../Components/Intro/Intro";
import Clients from "../Components/Clients/Clients";
import Service from "../Components/Service/Service";
import Features from "../Components/Features/Features";

const Home = () => {

    return(
        <div className="home">
            <Header/>
            <Intro/>
            <Clients/>
            <Service/>
            <Features/>
        </div>
    )
}

export default Home;
