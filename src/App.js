import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          alignItems: "center",
          alignContent: "center",
        }}
        className="App"
      >
        <h1
          style={{
            fontWeight: "bolder",
            color: "pink",
          }}
        >
          Increament and Decrement
        </h1>
        <div style={{ display: "inline-flex", marginTop: 50 }}>
          <div onClick={() => dispatch(decNumber())}>
            <button
              style={{ fontSize: "10rem", marginRight: 30, cursor: "pointer" }}
            >
              -
            </button>
          </div>

          <div style={{ fontSize: "8rem", marginRight: 30 }}>
            {/* <input value={myState} /> */}
            {myState}
          </div>
          <div onClick={() => dispatch(incNumber())}>
            <button
              style={{
                fontSize: "10rem",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
