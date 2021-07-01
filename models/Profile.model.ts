import mongoose, { Schema } from 'mongoose';

const ProfileSchema: Schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  country: {
    type: String,
    default: 'India',
  },
  address: {
    type: String,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;
