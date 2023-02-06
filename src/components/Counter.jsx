import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementBy,
  reset,
} from "../slices/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  return (
    <div>
      <h1>Couter</h1>
      <p>Counter Value : {count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(incrementBy(inputRef.current.value))}>
          Increment By
        </button>

        <hr />
        <hr />

        <input name="number" ref={inputRef} />
      </div>
    </div>
  );
};



const Pure = ({id, title}) => (
    <div>
        <h1>{title}</h1>
        {id}
    </div>
)