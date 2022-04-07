import "./App.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [digit, setDigit] = useState('');
  const [digit2, setDigit2]= useState('');
  const [input, setInput] = useState(false);
  const [click, setClick] = useState(false);
  const [operator, setOperator] = useState("");

  const [array, setArray] = useState({
    first:"",
    operator:"",
    second:"",
  });

  const handlesClick = (e) => {
    setInput(true);
   
    if (click===true) {
      setDigit2(digit2.concat(e.target.getAttribute("name")))
    }
    else {
 setDigit(digit.concat(e.target.getAttribute("name")))
    }
   
  };
  const handleClick = (e) => {
    setOperator(e.target.getAttribute("name"));
     setClick(true);
    //  if (digit=!"" && digit2!="") {
    //          try {
    //  setDigit(eval(digit+operator+digit2)).join('');
    // } catch (err) {
    //   setDigit("Error")
    // }
    //  }

  }
  const Calculator= ()=> {
      try {
        //const operation = Object.values(state).join('');
setDigit(eval(digit)).toString();
    } catch (err) {
      setDigit("Error")
    }
  }
  const C = () => {
    setInput(false);
    setDigit("");
    setOperator("");
    setDigit2("");
    // setDigit(digit.slice(0, -1));
  };
  const add = () => {};
  const divide = () => {
    setClick(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
  };
// og(eval(digit+ '+' +digit2));
// console.l
 
  let initial = JSON.parse(localStorage.getItem("digit"))
  return (
    <div className="container">
      <div className="box">
        <form className="form">
          <input
            type="text"
            className="entry"
            value={click? digit2:(input ? digit : "0")}
            onChange={handleChange}
          ></input>
        </form>
        <div className="one">
          <p name="" onClick={C}>
            {input ? "C" : "AC"}
          </p>
          <p name="" onClick={handlesClick}>
            +/-
          </p>
          <p id="seen" value="%" name="" onClick={handlesClick}>
            %
          </p>
          <h3
            className="try"
            style={{
              backgroundColor:
                operator === "divide" ? "white" : "rgb(216, 99, 21)",
              color: operator === "divide" ? "rgb(216, 99, 21)" : "white",
            }}
            name="divide"
            onClick={handleClick}
            value="/"
          >
            ÷
          </h3>
        </div>
        <div className="two">
          <p name="7" className="fish" onClick={handlesClick} >
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
              backgroundColor:
                operator === "times" ? "white" : "rgb(216, 99, 21)",
              color: operator === "times" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="times"
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
              backgroundColor:
                operator === "sub" ? "white" : "rgb(216, 99, 21)",
              color: operator === "sub" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="sub"
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
              backgroundColor:
                operator === "add" ? "white" : "rgb(216, 99, 21)",
              color: operator === "add" ? "rgb(216, 99, 21)" : "white",
            }}
            onClick={handleClick}
            name="add"
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
          <h3 className="try" onClick={handleClick}>
            =
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
