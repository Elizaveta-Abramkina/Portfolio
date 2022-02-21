import React, {useState} from 'react';
import Question from "./Question";

export interface IQuestionArr  {
        question: string,
        answer: string
}

const Questions = () => {

    const [questions, setQuestion] = useState<IQuestionArr[]>([]);


    const showQuestions = () => {
        return (
            questions.map(el => {
                return <Question question={el.question} answer={el.answer}/>
            })
        )
    }

    return (
        <div>
            <button onClick={() => setQuestion([...questions, { question: "string",
                answer: "string"}])}>Добавить
            </button>
            {showQuestions()}
        </div>
    );
};

export default Questions;