import nodemailer from "nodemailer";



export async function Sendmail(to: string, subject: string, mail: string) {
    try {
        const  transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,  
                pass: process.env.GMAIL_PASS,  
            },
        });

        await transporter.sendMail({
            from: to, 
            to: "hardikyadav1182005@gmail.com", 
            subject: `PortFolio Msg: ${subject}`,
            text: `${mail}`,
        });

        return {sucess: true };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return {sucess: false};

        
    }
    
}