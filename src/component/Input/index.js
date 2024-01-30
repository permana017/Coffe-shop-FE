import React from 'react'

const Input = ({ onChange, label, type, placeholder, value, name, id }) => {
    return (
        <div className="mb-3 flex flex-col gap-1">
            <label className="text-brown font-semibold" for={id}>
                {label}
            </label>
            <input
                autoComplete="off"
                name={name}
                value={value}
                onChange={onChange}
                className="border border-gray-500 p-2.5 rounded-md"
                type={type}
                placeholder={placeholder}
                id={id}
            />
        </div>
    );
};
export default Input