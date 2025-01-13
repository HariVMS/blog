import React from "react";

interface InputProperties {
  type?: "text" | "password" | "email" | "number" | "url" | "tel" | "search"; // Restrict to valid input types
  boxName?: string;
  id?: string;
  placeholder?: string;
}

const InputBox: React.FC<InputProperties> = ({
  type = "text",
  boxName = "",
  id = "",
  placeholder = "",
}) => {
  return (
    <input
      className="border rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
      type={type}
      name={boxName}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
