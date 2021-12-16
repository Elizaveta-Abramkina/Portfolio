import React, {useContext, useState} from "react";
import {Bar, Line} from 'react-chartjs-2'
import ContextTracker from "./ContextTracker";
import '../../styles/FinanceChart.css'


const FinanceChart: React.FC = () => {

    const {context: dataArr} = useContext(ContextTracker)
    const [templateChart, setTemplateChart] = useState(true)

    if (dataArr) {
        dataArr.sort(function (a, b) {
            if (a.date > b.date) {
                return 1;
            }
            if (a.date < b.date) {
                return -1;
            }
            return 0;
        });
    }

    const datesFunc = () => {
        if (dataArr) {
            return dataArr.map((element) => element.date)
        }
    }

    const financesFunc = () => {
        if (dataArr) {
            return dataArr.map((element) => element.finance)
        }
    }

    const finances = financesFunc()
    const dates = datesFunc()

    const monthlyExpenses = {
        label: 'Расходы за месяц',
        data: finances,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        tension: 0.3
    }

    const data = {
        labels: dates,
        datasets: [
            monthlyExpenses,
        ]
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


    return (
        <div>
            <label className="switch">
                <input type="checkbox"  onClick={()=>setTemplateChart(!templateChart)}/>
                <span className="slider round"> </span>
            </label>

            {templateChart? (
                <Line
                    height={100}
                    width={400}
                    options={options}
                    data={data}
                />
            ) : (
                <Bar
                    height={100}
                    width={400}
                    options={options}
                    data={data}
                />
            )}
        </div>
    )
}

export default FinanceChart;