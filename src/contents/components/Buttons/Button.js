import React from "react";

function Button(props) {
  //defining the handleClick
  //  the onClickFuntion is passed in on the props
  //  the function receives a parameter in the function and is passed in here
  //  the increment prop is on the Button component.
  const handleClick = () => props.onClickFunction(props.increment);

  return <button onClick={handleClick}>+{props.increment}</button>;
}

export default Button;
