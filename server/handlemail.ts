import z from 'zod'
import { Sendmail } from './Sendmail';


interface mailObjectType{
    to: string,
    subject: string,
    mail: string
}

export   const  handleMail= async (to: string, subject: string, mail: string)=>{
    const  SenderMail=to;
    if(SenderMail=='') return  {sucess: false, msg: 'Mail is not valid '};

    const EmailSchema= z.object({
        to: z.string().email()
    })

    const validEmail= EmailSchema.safeParse({to: SenderMail});
    if(!validEmail.success){
        return { sucess: false, msg: 'Invalid Email'};

    }
try {
    const response=  await Sendmail(to,subject,mail);
    if(response.sucess)      return {sucess: true ,msg: 'Mail is sent'};

    return {sucess: false,msg: 'Mail could not be sent'};
     
} catch (error) {
    return {sucess: false, msg: 'Send again !'};

    
}


}