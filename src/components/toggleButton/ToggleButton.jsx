import React, { useState } from "react";

function ToggleButton(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
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
