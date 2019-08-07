import nodemailer from "nodemailer";

export default class mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE,
                auth: {
                    user: process.env.EMAIL_ACCOUNT,
                    pass: process.env.EMAIL_PASSWORD
                }
            });
    }
    async send (to, subject, text){
        try {
            await this.transporter.sendMail({
                from: `"Newsletter" <${process.env.EMAIL_ACCOUNT}>`, // sender address
                to,
                subject,
                text
                //html: "<b>Hello world?</b>"
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}