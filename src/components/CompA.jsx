import React, { useCallback, useMemo, useState } from "react";
import CompB from "./CompB";

const CompA = () => {
  const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(0);

  let numbers = useMemo(() => [54, 45, 75, 33, 62], []);

  // const addition = () => console.log(55 + 65);

  // const point = useCallback(addition,[])

  return (
    <div>
      <h1>COUNTER (A) : {counter}</h1>
      <h1>COUNTER 2 (A) : {counter2}</h1>

      <button onClick={() => setcounter(counter + 10)}>UPDATE COUNTER1</button>
      <button onClick={() => setcounter2(counter2 + 10)}>
        UPDATE COUNTER2
      </button>
      <hr />
      <CompB data={counter} numbers={numbers} point={point} />
    </div>
  );
};

export default CompA;
