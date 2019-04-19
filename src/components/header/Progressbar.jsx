import React from 'react';
import { Progress } from 'reactstrap';

const Probar = (props) => {
  return (
    <div>
     <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="30">Wow!</Progress>
        <Progress bar color="info" value="25">Cool</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">!!</Progress>
      </Progress>
    </div>
  );
};

export default Probar;