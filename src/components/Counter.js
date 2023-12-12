import React, { useState } from "react";

function Counter() {
  const [count, setState] = useState(0);
  const countHandler = () => {
    setState(count + 1);
  };
  const decraseHandler = () => {
    setState(count - 1);
  };
  const resetHandler = () => {
    setState(0);
  };
  return (
    <div>
      <div className="counter center">
        <h1 className="counter__title">Counter App</h1>
        <div className="card center">
          <h2 className="card__title">Count : 0{count}</h2>
          <div className="card__btns">
            <button onClick={countHandler} className="btn card__btn" disabled={count===5}>
              +
            </button>
            <button onClick={decraseHandler} className="btn card__btn" disabled={count===-5}>
              -
            </button>
            <button onClick={resetHandler} className="btn card__btn">
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
