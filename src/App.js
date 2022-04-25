import "./App.css";
import React, { useState } from "react";

function App() {
  const [digit, setDigit] = useState("");
  const [digit2, setDigit2] = useState("0");

  const [input, setInput] = useState(false);
  const [click, setClick] = useState(false);

  const [operator, setOperator] = useState("");

  const [array, setArray] = useState([]);
  function handleArray() {
    setArray([...array, digit]);
    console.log("array");
  }

  const handlesClick = (e) => {
    if (digit2 !== 0 && click && !input) {
      setDigit2("0");
      setArray([]);
      setDigit(e.target.getAttribute("name"));
    } else if (digit2 !== 0 && click && input) {
      setDigit(digit.concat(e.target.getAttribute("name")));
    } else {
      setDigit(digit.concat(e.target.getAttribute("name")));
    }
  };

  const handleClick = (e) => {
    if (click) {
      setInput(true);
      setDigit(array[array.length - 1] + e.target.getAttribute("name"));
    } else {
      setOperator(e.target.getAttribute("name"));
      setDigit(digit.concat(e.target.getAttribute("name")));
    }
  };
  const Calculator = (e) => {
    try {
      setDigit2(eval(digit));
    } catch (err) {
      setDigit("Error");
    }
    setOperator("");
    setClick(true);
    setArray([...array, eval(digit)]);
    console.log(array);
  };
  const C = () => {
    setInput(false);
    setDigit("");
    setDigit2("0");
    setOperator("");
    setClick(false);
    setArray([]);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="box">
        <form className="form" onChange={handleArray}>
          <input
            type="text"
            className="entry"
            value={digit}
            onChange={handleChange}
          />
          <input
            type="text"
            className="entre"
            value={digit2}
            onChange={handleChange}
          />
        </form>
        <div className="one">
          <p name="" onClick={C}>
            {input ? "C" : "AC"}
          </p>
          <p name="" onClick={handlesClick}>
            +/-
          </p>
          <p id="seen" value="%" name="%" onClick={handleClick}>
            %
          </p>
          <h3
            className="try"
            style={{
              backgroundColor: operator === "/" ? "white" : "rgb(216, 99, 21)",
              color: operator === "/" ? "rgb(216, 99, 21)" : "white",
            }}
            name="/"
            onClick={handleClick}
            value="/"
          >
            ÷
          </h3>
        </div>
        <div className="two">
          <p name="7" className="fish" onClick={handlesClick}>
            7
          </p>
          <p name="8" className="fish" onClick={handlesClick}>
            8
          </p>
          <p name="9" className="fish" onClick={handlesClick}>
            9
          </p>
          <h3
            className="try"
            style={{
              backgroundColor: operator === "*" ? "white" : "rgb(216, 99, 21)",
              color: operator === "*" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="*"
            value="*"
          >
            ×
          </h3>
        </div>
        <div className="three">
          <p name="4" className="fish" onClick={handlesClick}>
            4
          </p>
          <p name="5" className="fish" onClick={handlesClick}>
            5
          </p>
          <p name="6" className="fish" onClick={handlesClick}>
            6
          </p>
          <h3
            className="try"
            style={{
              backgroundColor: operator === "-" ? "white" : "rgb(216, 99, 21)",
              color: operator === "-" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="-"
            value="-"
          >
            -
          </h3>
        </div>
        <div className="four">
          <p name="1" className="fish" onClick={handlesClick}>
            1
          </p>
          <p name="2" className="fish" onClick={handlesClick}>
            2
          </p>
          <p name="3" className="fish" onClick={handlesClick}>
            3
          </p>
          <h3
            className="try"
            style={{
              backgroundColor: operator === "+" ? "white" : "rgb(216, 99, 21)",
              color: operator === "+" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="+"
            value="+"
          >
            +
          </h3>
        </div>
        <div className="five">
          <h3 className="zero" name="0" onClick={handlesClick}>
            0
          </h3>
          <p name="." onClick={handlesClick}>
            .
          </p>
          <h3 className="try" onClick={Calculator}>
            =
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
