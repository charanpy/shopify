import React, { FC } from 'react';
import { getSession } from 'next-auth/client';
import ProfileComponent from '@/components/profile/profile.component';
import { getProfile } from 'lib/profile';
import { dataProps, notFound } from 'lib/page-props';
import { profileProps } from '@/types/Profile.types';
import { User } from '@/types/User.types';
import Seo from '@/components/seo/Seo';

const Profile: FC<profileProps> = ({ user }) => {
  return (
    <>
      <Seo title='Profile' description='User Profile' url='/profile' />
      <ProfileComponent user={user} />
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  console.log(session, 8);

  if (!session) return notFound();
  const userId = (session.user as User)._id;
  const user = await getProfile(userId);
  console.log(user, userId);

  if (!user) return notFound();
  return dataProps('user', user);
};

export default Profile;
