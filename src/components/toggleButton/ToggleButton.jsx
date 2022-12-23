import React, { useState } from "react";

function ToggleButton(props) {
  /* let textoBtn = "No me clickeaste"; */
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log("click btn");
    setIsActive(!isActive);
  };

  let classToggleBtn;
  if (isActive) classToggleBtn = "item-card_favicon favorite";
  else classToggleBtn = "item-card_favicon";

  return (
    <button className={classToggleBtn} onClick={handleClick}>
      {props.icon}
    </button>
  );
}

export default ToggleButton;
