import '../src/styles/App.css';
import Welcome from './containers/Welcome';
import Form from './containers/Form';
import serviceImg from '../src/assets/images/customer-service.png'
import { useState } from 'react';
import AppContext from '../src/context/AppContext';
import React  from 'react';
import useInitialState from './hooks/useInitialState';

function App() {  
  const initialState = useInitialState(); 
  const [btnContinue, setBtnContinue] = useState(false);
  const goQuestions = () =>{
    setBtnContinue(true);
  }
  const navQuestions = (nav) =>{

    if(nav==='prev'){
      initialState.prevQuestion();
      initialState.isValidQuestions(true)
    }

    if(initialState.validation ){
      if(nav==='next'){
        initialState.nextQuestion();
        initialState.isValidQuestions(initialState.answered[initialState.numberQuestion + 1])
      }
    }

  }

  return (
    <AppContext.Provider value={ initialState }>
      <div className="App">
            <div className="logo_content">
              <img className="logo" src={serviceImg} alt="logo"/>
            </div>

            <div  className={`question ${btnContinue?"hidden":"show"}`}>
              <Welcome/>
            </div>

            <div  className={`question ${!btnContinue?"hidden":"show"}`}>
              <Form/>
            </div>

            <div className={`button ${btnContinue?"hidden":"show"}`} onClick={()=>goQuestions()}>
              Continuar
            </div>

            <div className={`button-prev ${initialState.numberQuestion>0 ?"show":"hidden"}`} onClick={()=>navQuestions('prev')}>
              Anterior
            </div>

            <div className={`${!btnContinue ?"hidden":"show"}`}>
              <div className={`${initialState.validation || initialState.answered[initialState.numberQuestion] ? "button-next-active":"button-next-inactive"}`}
                   onClick={()=>navQuestions('next')}>
                Siguiente
              </div>
            </div>
      </div>
  </AppContext.Provider>
  );
}

export default App;
