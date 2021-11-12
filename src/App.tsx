import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Intro from './Components/Intro/Intro';
import Clients from "./Components/Clients/Clients";
import FinanceTracker, {
    IDataObj} from "./Components/FinanceTracker/FinanceTracker";
import FinanceChart from "./Components/FinanceTracker/FinanceChart";
import ContextTracker from './Components/ContextTracker'

function App() {

    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Clients/>
            <ContextTracker.Provider value={[context, setContext]}>
            <FinanceTracker/>
            <FinanceChart/>
            </ContextTracker.Provider>
        </div>
    );
}

export default App;
