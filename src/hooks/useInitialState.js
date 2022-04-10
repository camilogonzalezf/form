import { useState } from "react";

const useInitialState = () => {

    const [numberQuestion, setNumberQuestion] = useState(0);
    const [validation, setValidation] = useState(false);
    const questions = require('../data/question.json');
    const [answered, setAnswered] = useState([...Array(questions.length)].map(x=>false));

    const prevQuestion = () =>{
        if(numberQuestion>0)
            setNumberQuestion(numberQuestion - 1);
    };

    const nextQuestion = () =>{
        if(numberQuestion<questions.length - 1)
            setNumberQuestion(numberQuestion + 1);
    };
    
    const isValidQuestions = (item) =>{
            setValidation(item)
    }
    
    return{
        numberQuestion,
        prevQuestion,
        nextQuestion,
        validation,
        isValidQuestions,
        answered,
        setAnswered
    }
}

export default useInitialState; 