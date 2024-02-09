import React from 'react';
import {AcordeonItem} from './AcordeonItem';
import {data} from '../Services/data';



export const Acordeon=()=> {

  return (

    <div className='accordion'>
       {
       data.map((item, index) => (
        <AcordeonItem


          key={index}
          index={index}
          preguntas={item.preguntas}
          respuestas={item.respuestas}


        />
      )
      )
      }
    </div>
  );
};