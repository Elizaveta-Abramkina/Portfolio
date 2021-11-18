import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import ChartJS from "./Pages/ChartJS";
import {IDataObj} from "./Components/FinanceTracker/FinanceTracker";
import ContextTracker from './Components/ContextTracker';
import MediaContent from "./Pages/MediaContent";


function App() {
    const [context, setContext] = useState<IDataObj[]>([])
    return (
        <div className="App">
            <ContextTracker.Provider value={{context, setContext}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="chartjs" element={<ChartJS/>}/>
                <Route path="media-content" element={<MediaContent/>}/>
            </Routes>
            </ContextTracker.Provider>
        </div>
    );
}

export default App;
