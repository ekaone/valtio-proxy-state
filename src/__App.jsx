import React from "react";

// const SomeComponent = ({ data }) => {
//   console.log("some component");
//   return <div>This data</div>;
// };

const SomeComponent = ({ data }) =>
  React.useMemo(() => {
    console.log("some component");
    return <div>{data}</div>;
  }, [data]);

function __App() {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <SomeComponent data={value} />
      <br />
      <button onClick={() => setCount((c) => ++c)}>Counter: {count}</button>
      <br />
      <button onClick={() => setValue((v) => ++v)}>Value: {value}</button>
    </div>
  );
}

export default __App;
