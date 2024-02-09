import React from 'react';
import {Header} from './Componentes/Header';
import {Acordeon} from './Componentes/Acordeon';


export const App=()=> {
  return (
    <div className='container'>
      <Header></Header>
      <Acordeon></Acordeon>
    </div>
  );
};

