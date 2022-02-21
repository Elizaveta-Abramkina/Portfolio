import React, {useState} from 'react';
import QuestionComponent from "./QuestionComponent";

export interface IQuestionArr  {
    question: string,
    answer: string
}

const AllQuestionsComponent = () => {

    const [questions, setQuestion] = useState<IQuestionArr[]>([]);


    const showQuestions = () => {
        return (
            questions.map(el => {
                return <QuestionComponent question={el.question} answer={el.answer}/>
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

export default AllQuestionsComponent;