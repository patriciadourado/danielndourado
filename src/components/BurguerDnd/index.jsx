import React, { useState } from 'react';
import NavDnd from '../NavDnd';
import { Burguer, Bar } from './styles';

function BurguerDnd(){
  const [open, setOpen] = useState(false);

  return(
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <Bar open={open}/>
        <Bar open={open}/>
        <Bar open={open}/>
      </Burguer>
      <NavDnd open={open}/>
    </>
  );
}

export default BurguerDnd;