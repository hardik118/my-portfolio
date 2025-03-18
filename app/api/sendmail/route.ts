import { NextResponse } from "next/server";
import { handleMail } from "@/server/handlemail";


export async function POST(req:Request) {

    try {
      const {mail,subject,Desc }=  await req.json();
      const response= await handleMail(mail, subject, Desc)
      return NextResponse.json(response);

    } catch (error) {
        return NextResponse.json({ msg : "Internal Server Error" });

        
    }
    
}