import React from "react";
import cn from "classnames";
import "./input.css";

export const Input = ({
  type,
  label,
  className,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="inputContainer">
        {label ? <label className="label">{label}</label> : ""}
        <input
          type={type}
          className={cn({
            input: true,
            [className]: true,
          })}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
