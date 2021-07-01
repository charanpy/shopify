import axios from 'axios';

export const getProfile = async (userId: string) => {
  try {
    const {
      data: { user },
    } = await axios.get(`${process.env.URL}/api/${userId}`);
    return user;
  } catch (error) {
    return null;
  }
};

export const updateProfile = async (data, userId) => {
  try {
    const {
      data: { user },
    } = await axios.patch(`${process.env.URL}/api/${userId}`, {
      userData: data,
    });
    return user;
  } catch (error) {
    return null;
  }
};
