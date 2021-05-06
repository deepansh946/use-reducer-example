import { useReducer } from "react";
import "./styles.css";

const initialState = [
  {
    name: "Mad Angles",
    quantity: 5
  },
  {
    name: "Pringles",
    quantity: 3
  },
  {
    name: "Lays",
    quantity: 2
  },
  {
    name: "Kurkure",
    quantity: 1
  },
  {
    name: "Uncle Chips",
    quantity: 9
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((_, index) => index !== action.payload);
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ul>
        {state.map(({ name, quantity }, index) => (
          <div className="list-item">
            <li key={name}>
              <b>{name}</b> - {quantity}
            </li>
            <button
              onClick={() => {
                dispatch({ type: "delete", payload: index });
              }}
            >
              delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch({
              type: "add",
              payload: {
                name: "Doritoes",
                quantity: 5
              }
            });
          }}
        >
          add
        </button>
      </ul>
    </div>
  );
}
