import React  from 'react';
import { useState } from 'react'
export const AcordeonItem=({ preguntas, respuestas }) => {



  const [isOpen, setIsOpen] = useState(false);

  const activadorAcordeon = () => {

    setIsOpen(!isOpen);

  };

  return (

    <li className={isOpen ? "accordion_item active" : "accordion_item"}>
    <button className="button" onClick={activadorAcordeon}>

      {preguntas}

    </button>

    <div className={isOpen ? "answer_wrapper open" : "answer_wrapper"}>

      <div className="answer">{respuestas}</div>
    </div>
  </li>
  );
}