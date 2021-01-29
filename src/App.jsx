import React, { useState } from "react";
import { proxy, useProxy } from "valtio";
import "./App.css";

const state = proxy({
  count: 0,
  text: "hello " + Math.random(),
  useIncrement: function () {
    ++this.count;
  },
  useDecrement: function () {
    --this.count;
  },
});

function App() {
  const snapshot = useProxy(state);

  return (
    <div className="App">
      <header className="App-header">
        {snapshot.count}
        <br />
        {snapshot.text}
        <button onClick={() => state.useIncrement()}>Increment</button>{" "}
        <button onClick={() => state.useDecrement()}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
