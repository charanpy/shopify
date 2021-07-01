export interface ProfileTypes {
  userId: string;
  country?: string;
  address?: string;
  landmark?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export interface profileProps {
  user: ProfileTypes;
}
