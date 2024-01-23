import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className=" flex flex-col max-w-4xl">
      <button className=" bg-neutral-300" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button className="bg-neutral-300" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <span>Reset all clikc here</span>
      <button className="bg-red-200" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
