"use client";

import React, { useState } from "react";
import { LabelInput } from "../component/labelinput";

export default function ConnectWrapper() {
    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [Desc, setDesc] = useState('');
    const [res, setRes] = useState(false);
    const [msg, setMsg] = useState('');
    const [isDisabled, setIsDisabled] = useState(false); // Cooldown state

    const handleForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isDisabled) return; // Prevent multiple clicks

        setIsDisabled(true); // Disable button
        setTimeout(() => setIsDisabled(false), 3000); // Enable after 3s

        try {
            const response = await fetch("/api/sendmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mail, subject, Desc }),
            });

            const data = await response.json();
            setRes(true);
            setMsg(data.success ? "Email sent successfully!" : data.msg);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setRes(true);
            setMsg("Send Again");
        }

        setTimeout(() => setRes(false), 4000);
    };

    return (
        <div className="h-screen w-full relative flex items-center justify-center flex-col gap-5">
            {res && <div className="absolute top-2 right-3 border w-auto px-4 py-1 rounded-lg border-gray-200 text-blue-400 text-sm shadow-md">{msg}</div>}

            <LabelInput value={mail} onchange={(e) => setMail(e.target.value)} label="Mail" />
            <LabelInput value={subject} onchange={(e) => setSubject(e.target.value)} label="Subject" />
            <LabelInput value={Desc} onchange={(e) => setDesc(e.target.value)} label="Desc" />
            
            <button
                onClick={handleForm}
                disabled={isDisabled}
                className={`text-sm border border-gray-600 rounded-4xl w-22 h-12 transition ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)]"
                }`}
            >
                {isDisabled ? "Wait..." : "Mail"}
            </button>
        </div>
    );
}
