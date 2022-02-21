import React, {useState} from 'react';

export interface IQuestion  {
    question: string,
    answer: string
}

const Question = (props:IQuestion) => {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div>
            <p onClick={()=>setShowAnswer(!showAnswer)}>{props.question}</p>
            {showAnswer ? <p>{props.answer}</p> : null }
        </div>
    );
};

export default Question;