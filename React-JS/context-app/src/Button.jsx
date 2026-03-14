import { useCounterContext } from "./context/counter.context";

function Button() {
  let { count, setCount } = useCounterContext();
  return (
    <button className="counter" onClick={() => setCount((count) => count + 1)}>
      Inc
    </button>
  );
}

export default Button;
