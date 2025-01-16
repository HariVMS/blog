import React from "react";

const InputBox: React.FC<InputProperties> = ({
  type = "text",
  boxName = "",
  id = "",
  placeholder = "",
  value,
  checked,
  onChange,
}) => {
  return (
    <input
      className={
        type !== "radio" && type !== "checkbox"
          ? "border rounded-md px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
          : "border rounded-md px-3 py-3 text-gray-700 focus:outline-none "
      }
      type={type}
      name={boxName}
      id={id}
      placeholder={placeholder}
      value={value} 
      checked={checked} 
      onChange={onChange} 
    />
  );
};

export default InputBox;
