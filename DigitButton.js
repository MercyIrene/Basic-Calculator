import React from 'react';
import { ACTIONS } from './App';

export default function DigitButton({ digit, dispatch }) {
  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  return (
    <button onClick={handleClick} className="button">
      {digit}
    </button>
  );
}
