import React, {useContext, useState} from "react";
import ContextTracker from "../ContextTracker";
import FinanceChart from "./FinanceChart";
import "../../styles/FinanceTracker.css"
import Modal from "./Modal";

export interface IDataObj {
    date: string,
    finance: number,
}

const FinanceTracker = () => {

    const [finance, setFinance] = useState({value: ''});
    const [date, setDate] = useState<{ value: string }>({value: ''})
    const [post, setPost] = useState<string[]>([])
    // const [dataArr, setDataArr] = useState<IDataObj[]>([])
    const {context: dataArr, setContext: setDataArr} = useContext(ContextTracker)
    const [open, setOpen] = useState<boolean>(false)

    const handleChangeFinance: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFinance({value: event.target.value})
    }

    const handleFocus: React.FocusEventHandler = (event) => {
        setFinance({value: ''})
    }

    const postInfo = `${date.value} : ${finance.value} p. `

    const handleClick = (event: React.SyntheticEvent) => {
        console.log(date.value)
        console.log(finance.value)

        if (finance.value !== '' && date.value !== '') {
            setPost([...post, postInfo])
        }

        const index = dataArr.findIndex((element) => {
                return element.date === date.value
            }
        )

        if (index >= 0) {
            dataArr[index] = {date: date.value, finance: dataArr[index].finance + +finance.value}
        } else {
            const objData: IDataObj = {
                date: date.value,
                finance: +finance.value
            }
            dataArr.push(objData)
        }

        setDataArr([...dataArr])
    }

    const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setDate({value: event.target.value})
    }

    const list = () => {
        return (post.map((element) => {
            return (
                <li key={Math.random()}>{element}</li>
            )
        }))
    }

    const handleClose = ():void => {
        setOpen(false)
    }

    return (
        <div className="finance-tracker">
            <button onClick={handleClick}>Добавить данные</button>
            <input value={finance.value} onFocus={handleFocus} onChange={handleChangeFinance} type='number'/>
            <input value={date.value} onChange={handleChangeDate} type='date'/>
            <ul>{list()}</ul>
            <FinanceChart/>
            <button onClick={() => setOpen(true)}>Modal</button>
            <Modal
                isOpen={open}
                onClose={handleClose}/>
        </div>
    )
}

export default FinanceTracker;


