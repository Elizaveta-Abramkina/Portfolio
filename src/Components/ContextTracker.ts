import React from "react";
import {IDataObj} from "./FinanceTracker/FinanceTracker";

interface IContextTracker {
    context: IDataObj[]
    setContext:  React.Dispatch<React.SetStateAction<IDataObj[]>>
}
const ContextTracker = React.createContext<IContextTracker> ({}as IContextTracker)

export default ContextTracker;