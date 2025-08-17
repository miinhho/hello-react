import { useReducer, useState } from "react";

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  const [amount, setAmount] = useState(initialCount.value);
  
  function handleAdd() {
    dispatch({
      type: 'add',
      value: amount
    });
  }

  function handleMinus() {
    dispatch({
      type: 'minus',
      value: amount
    });
  }

  return (
    <>
      <p>{count.value}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>
        +
      </button>
      <button onClick={handleMinus}>
        -
      </button>
      <p>{count.history.join(", ")}</p>
    </>
  )
}

const initialCount = {
  value: 0,
  history: [],
}

function countReducer(draft, action) {
  const newValue = parseInt(action.value);
  const newDraft = {
    history: [...draft.history, draft.value],
  };

  switch (action.type) {
    case 'add': {
      return {
        ...newDraft,
        value: draft.value + newValue,
      };
    }
    case 'minus': {
      return {
        ...newDraft,
        value: draft.value - newValue
      };
    }
    default: {
      throw Error(`Unknown Action: ${action.type}`);
    }
  }
}