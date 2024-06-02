import React from "react";

const InputTextArea = ({
  onChange,
  label,
  type,
  placeholder,
  value,
  name,
  id,
  outline,
  disabled,
}) => {
  const dynamicClassInput = () => {
    if (outline)
      return "border border-gray-500 p-2.5 rounded-md focus:ring-2 outline-none";
    return "border-b-2 py-2.5 outline-none focus:border-b-[#6A4029]";
  };
  return (
    <div className="mb-3 flex flex-col gap-1">
      <label className="text-brown font-semibold" htmlFor={id}>
        {label}
      </label>
      <textarea
        autoComplete="off"
        name={name}
        value={value}
        onChange={onChange}
        className={dynamicClassInput()}
        type={type}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};
export default InputTextArea;
