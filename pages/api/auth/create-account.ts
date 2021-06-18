const bcrypt = require('bcryptjs');
import { Request, Response } from 'express';
import dbConnect from 'utils/db';
import { handleMongoError } from '../../../utils/mongo-error';
import { sanitizeUserInput, createUser } from '../../../utils/auth';

const registerHandler = async (req: Request, res: Response) => {
  await dbConnect();
  const { password, email, username } = req.body;
  const [valid, message] = sanitizeUserInput(email, password, username);

  if (!valid) return res.status(400).json({ message });
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      email,
      password: hashPassword,
      name: username,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);

    const [, message] = handleMongoError(error);
    return res.status(400).json({
      message: (message as string) || 'Something went wrong',
    });
  }
};

export default registerHandler;
