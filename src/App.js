import React, { useState } from "react";
import "./styles.css";

function Hamburger(props) {
  const { preStyled, onClick, lastStyle } = props;

  return (
    <div onClick={onClick} className={`menu ${preStyled} ${lastStyle}`}>
      <div className="line"></div>
      <div className="line short"></div>
      <div className="line"></div>
      <div className="line short"></div>
      <div className="line"></div>
    </div>
  );
}

export default function App() {
  const [activeStyle, setActiveStyle] = useState("left");

  const styleHandler = (val) => {
    setActiveStyle(val);
  };

  return (
    <div className="container">
      <Hamburger
        preStyled={"left"}
        onClick={() => styleHandler("left")}
        lastStyle="clickable"
      />
      <Hamburger
        preStyled={"center"}
        onClick={() => styleHandler("center")}
        lastStyle="clickable"
      />
      <Hamburger
        preStyled={"right"}
        onClick={() => styleHandler("right")}
        lastStyle="clickable"
      />
      <Hamburger
        preStyled={activeStyle}
        onClick={() => styleHandler(activeStyle)}
        lastStyle="active"
      />
    </div>
  );
}
