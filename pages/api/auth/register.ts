import { isEmailValid } from '../../../utils/credential-validation';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import sendEmail from '../../../utils/nodemailer';
import { isUser } from '../../../utils/auth';
import dbConnect from '../../../utils/db';

const generateToken = async (data) =>
  await jwt.sign(data, process.env.EMAIL_SECRET, {
    expiresIn: '60m',
  });

const mailOptions = (token, email) => ({
  user: process.env.EMAIL_USERNAME,
  password: process.env.EMAIL_PASSWORD,
  to: email,
  subject: 'Shopify account verification',
  html: `<div><p>Thank you for registering shopify.Click on link above to verify</p><p>${process.env.NEXTAUTH_URL}/activate/${token}</p></div>`,
});

const registerHandler = async (req: Request, res: Response) => {
  if (req.method === 'POST') {
    await dbConnect();
    console.log(req.body);

    const { email } = req.body;

    if (isEmailValid(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    const user = await isUser(email);
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const token = await generateToken({ email });
    try {
      await sendEmail(mailOptions(token, email));
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log(error?.data);
      return res
        .status(400)
        .json({ message: 'Error sending mail.Please try again' });
    }
  }
};

export default registerHandler;
