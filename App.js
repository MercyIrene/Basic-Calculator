import React from 'react';
import { useReducer } from 'react';
import './App.css';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
};

function reducer(state, { type, payload }) {
    switch (type) {
    case ACTIONS.ADD_DIGIT:
        if(payload.digit === "0" && state.currOperand === "0") return state 
        if(payload.digit === "." && state.currOperand.includes (".")) return state 
    return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload.digit}`
    };
    case ACTIONS.CLEAR:
    return {
        currOperand: '',
        prevOperand: null,
        operation: null
    };
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1) // Remove the last digit
      };
      // ... other cases
      default:
        return state;
    }
  }
  


function App() {
    const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(reducer, {
        currOperand: '',  // Set initial value for currOperand
        prevOperand: null,
        operation: null
      });

  return (
    <div className="overall">
      <div className="calc-body">
        <div id="display" className="input-area">
          <div className='prev-operand'>{prevOperand} {operation}</div>
          <div className='curr-operand'>{currOperand}</div>
          <OperationButton dispatch={dispatch} digit='D' />

        </div>
        <div className="buttons-row">
          <OperationButton dispatch={dispatch} digit='C' />
          <OperationButton dispatch={dispatch} digit='(' /> {/* Optional: Brackets button */}
          <OperationButton dispatch={dispatch} digit='%' />
          <OperationButton dispatch={dispatch} digit='/' />
        </div>

        <div className="buttons-row">
          <DigitButton digit='7' dispatch={dispatch} />
          <DigitButton digit='8' dispatch={dispatch} />
          <DigitButton digit='9' dispatch={dispatch} />
          <OperationButton dispatch={dispatch} digit='*' />
        </div>

        <div className="buttons-row">
          <DigitButton digit='4' dispatch={dispatch} />
          <DigitButton digit='5' dispatch={dispatch} />
          <DigitButton digit='6' dispatch={dispatch} />
          <OperationButton dispatch={dispatch} digit='-' />
        </div>

        <div className="buttons-row">
          <DigitButton digit='1' dispatch={dispatch} />
          <DigitButton digit='2' dispatch={dispatch} />
          <DigitButton digit='3' dispatch={dispatch} />
          <OperationButton dispatch={dispatch} digit='+' />
        </div>

        <div className="buttons-row">
          <OperationButton dispatch={dispatch} digit='+/-' /> {/* Optional: Plus/Minus button */}
          <DigitButton digit='0' dispatch={dispatch} />
          <DigitButton digit='.' dispatch={dispatch} />
          <OperationButton dispatch={dispatch} digit='=' />
        </div>
      </div>
    </div>
  );
}

export default App;
