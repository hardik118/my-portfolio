'use client';


import React, { useState } from "react"
import { LabelInput } from "../component/labelinput"

export default function ConnectWrapper(){
    const [mail, setmail]= useState('');
    const [subject, setsubject]= useState('');
    const [Desc, setDesc]= useState('');
    const [res, setRes]= useState(false);
    const [msg, setmsg]= useState('');

    

 const handleForm=async (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    try {
        const response = await fetch("/api/sendmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mail, subject, Desc }),
        });

        const data = await response.json();
        setRes(true);

        if (data.success) {
            console.log("Email sent successfully!", data.response);
            setmsg(data.msg);
        } else {
            console.error("Failed to send email", data.error);
            setmsg(data.msg);
        }
        setTimeout(() => {
            setRes(false)
        }, 4000);
    } catch (error) {
        setRes(true)
        console.error("Request failed", error);
        setmsg('Send Again');
        setTimeout(() => {
            setRes(false)
        }, 4000);
    }


 }

    return (
        <div className="h-screen w-full  relative flex  items-center justify-center flex-col gap-5   ">
           {
    res && <div className="absolute top-2 right-3 border w-auto px-4 py-1 rounded-lg border-gray-200 text-blue-400 text-sm shadow-md">
        {msg}
    </div>
}

           <LabelInput value={mail} onchange={(e)=>setmail(e.target.value )}  label="Mail"></LabelInput>
           <LabelInput value={subject}  onchange={(e)=>setsubject(e.target.value)} label="Subject"></LabelInput>
           <LabelInput value={Desc} onchange={(e)=>(setDesc(e.target.value))}  label="Desc"></LabelInput>
           <button onClick={handleForm} className=" text-sm  border border-gray-600  rounded-4xl w-22 h-12  hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)] transition">Mail</button>
            
        </div>
    )
}