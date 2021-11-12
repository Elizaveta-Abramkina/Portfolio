import React, {useContext, useState} from "react";
import FinanceChart from "./FinanceChart";
import ContextTracker from "../../App"

export interface IDataObj{
    date: string,
    finance: number,
}

const FinanceTracker = () => {

    const [finance, setFinance] = useState({value: ''});
    const [date, setDate] = useState<{ value: string }>({value: ''})
    const [post, setPost] = useState<string[]>([])
    const [dataArr, setDataArr] = useState<IDataObj[]>([])
    const [context, setContext] = useContext(ContextTracker)

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

    return (
        <div>
            <button onClick={handleClick}>Добавить данные</button>
            <input value={finance.value} onFocus={handleFocus} onChange={handleChangeFinance} type='number'/>
            <input value={date.value} onChange={handleChangeDate} type='date'/>
            <ul>{list()}</ul>

        </div>
    )
}

export default FinanceTracker;



// dataArr.forEach((element)=>{
//       if(element.date === date.value){
//           element= {date:'dat', finance:'5'}
//       }
//   })
//


// dataArr.map((element)=>{
//     if(element.date==date.value) {return  (+finance.value+(+element.finance))}
// })
//
// const dataArrSum = dataArr.map((element)=>{
//      if(element.date==date.value) {return element.finance }
//  })
//  console.log(dataArrSum)