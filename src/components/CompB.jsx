import React from "react";

const CompB = ({ data, numbers, point }) => {
  console.log("Reload")
  point(point)
  return (
    <div>
      <h1>COUNTER (B) : {data}</h1>

      <h1>NUMBERS (B) : {numbers}</h1>
    </div>
  );
};

export default React.memo(CompB)
