import React from "react";
import {IDataObj} from "./FinanceTracker";

export interface IContextTracker {
    context: IDataObj[]
    setContext:  React.Dispatch<React.SetStateAction<IDataObj[]>>
}

const ContextTracker = React.createContext<IContextTracker> ({}as IContextTracker)

export default ContextTracker;