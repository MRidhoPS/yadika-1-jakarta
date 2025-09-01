"use client";

import React from "react";

export default function TextInput({
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
}) {
    return (
        <div className="flex flex-col">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline font-semibold"
            />
        </div>
    );
}
