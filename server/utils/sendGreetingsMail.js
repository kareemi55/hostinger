import nodeMailer from "nodemailer";
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SERVICE,
  SMTP_MAIL,
  SMTP_PASSWORD,
  SMTP_APP_NAME,
} from "../constants/constants.js";

export const sendGreetingsMail = async (email, user) => {
  const transporter = nodeMailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    service: SMTP_SERVICE,
    auth: {
      user: SMTP_MAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMTP_MAIL,
    to: email,
    subject: "Greetings!",
    html: `Hello <b>${user.name}</b>, welcome to <b>${SMTP_APP_NAME}</b>. We are excited to have you on board!, thank you joining us`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending Greeting email:", error);
    } else {
      console.log("Greeting Email sent sucessfully:", info.response);
    }
  });
};
