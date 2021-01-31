import React from "react";
import { useProxy } from "valtio";
import { state } from "../stores";

function Counter() {
  const snapshot = useProxy(state);
  console.log("Counter render");
  return (
    <div>
      <button onClick={() => state.useIncrement()}>Increment</button>{" "}
      {snapshot.count}{" "}
      <button onClick={() => state.useDecrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
