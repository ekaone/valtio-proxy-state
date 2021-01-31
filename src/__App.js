import React from "react";
import { proxy, useProxy } from "valtio";

const state = proxy({
  count: 0,
  text: "hello",
  randomNumber: Math.random(),
});

function SomeComponent({ data }) {
  console.log(data);
  return <div>{data}</div>;
}

function App() {
  const snapshot = useProxy(state);
  const MemoizedSomeComponent = React.useCallback(() => SomeComponent, []);

  return (
    <div>
      // can't load randomNumber value
      <MemoizedSomeComponent data={snapshot.randomNumber} />
    </div>
  );
}

export default App;
