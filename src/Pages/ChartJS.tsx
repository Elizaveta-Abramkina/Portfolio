import React, {useState} from "react";
import FinanceTracker, {IDataObj} from "../Components/FinanceTracker/FinanceTracker";
import ContextTracker from "../Components/ContextTracker";
import Header from "../Components/Header/Header";
import "../styles/ChartJS.css"

const ChartJS = () => {

    return (
        <div className="chartjs">
            <Header/>
            <FinanceTracker/>
        </div>
    )
}

export default ChartJS;