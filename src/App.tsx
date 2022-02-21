import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import ChartJS from "./Pages/ChartJS";
import {IDataObj} from "./Components/FinanceTracker/FinanceTracker";
import ContextTracker from './Components/FinanceTracker/ContextTracker';
import MediaContent from "./Pages/MediaContent";
import Layout from "./Components/Layout";
import NotFound from './Pages/NotFound';
import OnlineStore from "./Pages/OnlineStore";
import AdminPanel from "./Components/Store/OnlineStore/AdminPanel";
import AllProducts from "./Components/Store/OnlineStore/AllProducts";
import Product from "./Components/Store/OnlineStore/Product";

import Questions from "./Components/Questions/Questions";


const App: React.FunctionComponent = () => {
    const [context, setContext] = useState<IDataObj[]>([])
    return (
        <div className="App">
            <ContextTracker.Provider value={{context, setContext}}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="chartjs" element={<ChartJS/>}/>
                        <Route path="media-content" element={<MediaContent/>}/>
                        <Route path="questions" element={<Questions/>}/>
                        <Route path="store" element={<OnlineStore/>}>
                            <Route path="admin-panel"  element={<AdminPanel/>}/>
                            <Route path="products" element={<AllProducts/>}/>
                            <Route path="products/:productLink" element={<Product/>}/>
                            <Route/>
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </ContextTracker.Provider>
        </div>
    );
}

export default App;
