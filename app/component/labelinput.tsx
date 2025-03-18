'use client';

import React from "react";

export const  LabelInput = ({ label, value, onchange }: { label: string, value: string, onchange: React.ChangeEventHandler<HTMLTextAreaElement> }) => {
    return (
        <div className="flex flex-col gap-2 w-full items-center justify-center">
            <label className="text-xl text-left w-1/2 text-gray-200" htmlFor="input">{label}</label>
            <textarea
                className="w-1/2 min-w-1/2 max-h-56 border-b   border-gray-600 placeholder:text-sm resize-none overflow-hidden focus:outline-none"
                placeholder={label}
                value={value}
                onChange={onchange}
                rows={1} // Start with 1 row
                onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto"; // Reset height
                    target.style.height = `${target.scrollHeight}px`; // Set to scroll height
                }}
            />
        </div>
    );
};
