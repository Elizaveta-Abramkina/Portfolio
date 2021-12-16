import React, {useState} from "react";
import {defaultDataProduct, IDataProduct, OnlineStoreContext} from "../Components/Store/OnlineStore/OnlineStoreContext";

import StoreNavigation from "../Components/Store/StoreNavigation";


const OnlineStore = () => {
    const [context, setContext] = useState<IDataProduct[]>([defaultDataProduct])
    return (
        <div>
            <OnlineStoreContext.Provider value={{context, setContext}}>
                <StoreNavigation/>
            </OnlineStoreContext.Provider>
        </div>
    )
}

export default OnlineStore;