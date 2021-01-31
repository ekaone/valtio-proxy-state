import React from "react";
import { proxy, useProxy } from "valtio";
import memoize from "proxy-memoize";
import "./App.css";

const state = proxy({
  count: 0,
  text: "hello",
  randomNumber: Math.random(),
  useIncrement: function () {
    ++this.count;
  },
  useDecrement: function () {
    --this.count;
  },
  seats: [
    { id: "A1", number: "A1", occupied: true },
    { id: "A2", number: "A2", occupied: true },
    { id: "A3", number: "A3", occupied: false },
    { id: "A4", number: "A4", occupied: false },
    { id: "A5", number: "A5", occupied: true },
    { id: "A6", number: "A6", occupied: true },
    { id: "A7", number: "A7", occupied: false },
  ],
  selected: [],
  useSelected: function (id) {
    const order = this.seats.find((seat) => seat.id === id);
    state.selected.push({ ...order });
    console.log(state.selected);
  },
});

function SomeComponent({ data }) {
  console.log(data);
  return <div>{data}</div>;
}

function App() {
  const snapshot = useProxy(state);
  // const MemoizedSomeComponent = React.useMemo(() => SomeComponent, [
  //   snapshot.text,
  // ]);
  // const MemoizedSomeComponent = React.useCallback(() => SomeComponent, []);
  const MemoizedSomeComponent = React.memo(() => SomeComponent, [
    snapshot.text,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <MemoizedSomeComponent data={snapshot.randomNumber} />
        <br />
        {snapshot.count}
        <br />
        {snapshot.text}
        <button onClick={() => state.useIncrement()}>Increment</button>{" "}
        <button onClick={() => state.useDecrement()}>Decrement</button>
        <br />
        Selected: {snapshot.selected.length}
        <br />
        {JSON.stringify(snapshot.selected, null, 2)}
        <br />
        <ul>
          {snapshot.seats.map((seat) => (
            <li key={seat.id} onClick={() => snapshot.useSelected(seat.id)}>
              {seat.number} {seat.occupied === true ? "Isi" : "Kosong"}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
