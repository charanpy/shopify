import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const activateAccount = async (token: string | null) => {
  if (!token) return null;
  let decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.EMAIL_SECRET);
    const { email } = decoded;
    if (!email) return null;
    return email;
  } catch (error) {
    return null;
  }
};

export default activateAccount;
