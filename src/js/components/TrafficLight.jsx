import React, { useState } from "react";

const TrafficLight = () => {
  const [selected, setSelected] = useState("red");
  // Creamos un estado para saber si el color púrpura debe existir o no
  const [hasPurple, setHasPurple] = useState(false);

  const changeColor = (color) => {
    setSelected(color);
  };

  return (
    <main>
      <div className="p-box"></div>
      <div className="box-light">
        <div 
          className={`light red ${selected === "red" ? "light-on" : ""}`}
          onClick={() => changeColor("red")}
        ></div>
        
        <div 
          className={`light yellow ${selected === "yellow" ? "light-on" : ""}`}
          onClick={() => changeColor("yellow")}
        ></div>
        
        <div 
          className={`light green ${selected === "green" ? "light-on" : ""}`}
          onClick={() => changeColor("green")}
        ></div>

        {/* Renderizado condicional: solo aparece si hasPurple es true */}
        {hasPurple && (
          <div 
            className={`light purple ${selected === "purple" ? "light-on" : ""}`}
            onClick={() => changeColor("purple")}
          ></div>
        )}
      </div>
      <button className="btn-purple" onClick={() => { setHasPurple(true); setSelected("purple"); }}>
       Extra Color
      </button>
    </main>
  );
};

export default TrafficLight;