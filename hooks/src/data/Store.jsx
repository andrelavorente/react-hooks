import React from "react";
import { useState } from "react";

const initialState = {
  number: 1234,
  text: "Context API + Hooks",
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setText: (t) => updateState("text", t),
        setNumber: (n) => updateState("number", n),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
