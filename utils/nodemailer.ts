import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  console.log(options);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    service: 'gmail',
    auth: {
      user: options.user,
      pass: options.password,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.to,
    html: options.html,
    subject: options.subject,
  };

  return await transporter.sendMail(mailOptions);
};

export default sendEmail;
