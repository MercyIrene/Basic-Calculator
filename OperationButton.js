import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faPercent, faXmark, faMinus, faPlus, faDeleteLeft, faEquals, faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { ACTIONS } from './App';

export default function OperationButton({ dispatch, digit }) {
  const handleClick = () => {
    if (digit === 'C') {  // Check for clear button digit
      dispatch({ type: ACTIONS.CLEAR });
    } else {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { digit } }); // Existing logic
    }
  };

  return (
    <button onClick={handleClick} className="symbol">
      {digit === '/' ? <FontAwesomeIcon icon={faDivide} /> :
        (digit === '*' ? <FontAwesomeIcon icon={faXmark} /> :
          (digit === '%' ? <FontAwesomeIcon icon={faPercent} /> :
            (digit === '-' ? <FontAwesomeIcon icon={faMinus} /> : // Added minus icon
             (digit === '+' ? <FontAwesomeIcon icon={faPlus} /> : // Added plus icon
              (digit === '+/-' ? <FontAwesomeIcon icon={faPlusMinus} /> :
              (digit === 'D' ? <FontAwesomeIcon icon={faDeleteLeft} /> :
                (digit === '=' ? <FontAwesomeIcon icon={faEquals} /> : // Added equals icon
               digit) // Render the digit itself otherwise
              )
            )
            )
            )
          )
        )
      }
    </button>
  );
}
