import nodemailer from "nodemailer";



export async function Sendmail(to: string, subject: string, mail: string) {
    try {
        let transporter = nodemailer.createTransport({
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

    } catch (error) {
        return {sucess: false};

        
    }
    
}