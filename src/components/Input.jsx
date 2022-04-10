
import React, { useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/Input.css'


const Input = ({element}) => {
   
   const {answered ,setAnswered, numberQuestion, isValidQuestions} = useContext(AppContext); 

   const onValidation = (event) =>{
   //Validaciones  
      if(element.type==='text' || element.type==='date'){ 
        if(event.target.value.length > 0 ){
            isValidQuestions(true)
            let arr = answered;
            arr[numberQuestion] = true;
            setAnswered(arr);
        } else {
          isValidQuestions(false)
          let arr = answered;
          arr[numberQuestion] = false;
          setAnswered(arr);
        }
      }

      if(element.type==='email'){ 
        var expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if(expReg.test(event.target.value)){
          isValidQuestions(true)
          let arr = answered;
          arr[numberQuestion] = true;
          setAnswered(arr);
        } else {
          isValidQuestions(false)
          let arr = answered;
          arr[numberQuestion] = false;
          setAnswered(arr);
        }
      }

      if(element.type==='phone'){ 
        var expTel =  /^\d{10}$/; //El telefono celular tiene 10 digitos
        if(expTel.test(event.target.value)){
          isValidQuestions(true)
          let arr = answered;
          arr[numberQuestion] = true;
          setAnswered(arr);
        } else {
          isValidQuestions(false)
          let arr = answered;
          arr[numberQuestion] = false;
          setAnswered(arr);
        }
      }
      
    }


   return (
        <div className={`question-input  ${numberQuestion===element.id?"show-input":"hidden-input"}`}>
            <h1 className="title">{element.title}</h1>
            
            <div className="message">
              <p>{element.message}</p>
            </div>
            
            <input onChange={onValidation}  type={element.type} name={element.name} className={`${element.type!=="submit" ? "input-field" : "input-submit" }`}/>

        </div>
    );
}

export default Input;