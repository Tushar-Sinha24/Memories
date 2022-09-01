const nodemailer = require("nodemailer");

const sendEmail =async(options)=>{
    const transpoter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      //Send eamil with defined transport Object
      let message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email, 
        subject: options.subject, // Subject line
        text: options.message, // plain text body
        html: "<b>Hello world?</b>", // html body
    };

    const info =await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
}

module.exports=sendEmail