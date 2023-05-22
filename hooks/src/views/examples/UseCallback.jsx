import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import UseCallbackButton from "./UseCallbackButton";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  function inc(delta) {
    setCount(count + delta);
  }

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memorizada!"
      />

      <div className="center">
        <span className="text">{count}</span>

        <div>
          <UseCallbackButton inc={inc} />
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
