import React, { useEffect, useState } from "react";

const Reloj = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(function (){
        setTime(function (prevTime){ return prevTime + 10} );
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return function () { return clearInterval(interval); }
  }, [running]);

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setRunning(true)}>Iniciar</button>
        <button onClick={() => setRunning(false)}>Detener</button>
      </div>
    </div>
  );
};

export default Reloj;
