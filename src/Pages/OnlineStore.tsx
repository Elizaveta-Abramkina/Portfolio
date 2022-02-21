import React, {useState} from "react";
import {defaultDataProduct, IDataProduct, OnlineStoreContext} from "../Components/Store/OnlineStore/OnlineStoreContext";

import StoreNavigation from "../Components/Store/StoreNavigation";
import {Outlet} from "react-router-dom";


const OnlineStore = () => {
    const [context, setContext] = useState<IDataProduct[]>([defaultDataProduct])
    return (
        <div>
            <OnlineStoreContext.Provider value={{context, setContext}}>
                <StoreNavigation/>
                <Outlet/>
            </OnlineStoreContext.Provider>
        </div>
    )
}

export default OnlineStore;