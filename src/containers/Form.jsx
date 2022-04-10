
import '../styles/Form.css'
import Input from '../components/Input';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useEffect, useState } from 'react';

const Form = () => {
    const questions = require('../data/question.json')
    const { numberQuestion } = useContext(AppContext); 

    const [width, setWidth] = useState( {width: "0"})

    useEffect(()=>{
        const percent = (numberQuestion/(questions.length-1)*100).toString()+'%';
        const obj = {
                width: percent
        }
        setWidth(obj)
    },[numberQuestion])


    return (
        <section className="form">
            <form>
                {questions.map(question => (
                    <Input element={question} key={question.id} />  
                ))
                }
            </form>
            <div className="bar">
                <div className="word-progress">
                    Progreso
                </div>
                <div className='progress' style={width}>
                </div>
            </div>
        </section>
    );
}

export default Form;
