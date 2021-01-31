import React from "react";
import { useProxy, subscribe } from "valtio";
import { state } from "../stores";

function Print() {
  return React.useMemo(() => {
    console.log("Print out");
    return <div>Print Out</div>;
  }, []);
}

function PrintOut() {
  const snapshot = useProxy(state);
  return (
    <div>
      <Print />
    </div>
  );
}

export default PrintOut;
