import React, { Component, useReducer } from 'react';
import { render } from 'react-dom';


type Props = {
  initialCount: number
}


type State = {
  count: number
}

type Actions = 'increment' | 'decrement' | 'reset'

type Action = {
  type: Actions
}


function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: state.count = 0 };
    default:
      return state;
  }
}

function Counter({ initialCount }: Props) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      Count: {state.count}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        textAlign: "center"
      }}
    >
      <h1>React Counter Example</h1>
      <Counter initialCount={0} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
