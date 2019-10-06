import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";
import "./styles.css";

const Typewriter = [
  "Heather Zurek",
  "Heather Zurek",
  
];
let index = 0;

export default function Name() {
  const [typedName, settypedName] = useState("Heather Zurek");
  const intervalRef = useRef({});
  const name = useTypewriter(typedName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      settypedName(Typewriter[index]);
    }, 2500);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [typedName]);
  return (
    <div>
      <h1 className="cursor">{name}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Name />, rootElement);
