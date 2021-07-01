import React, { FC } from 'react';
import Container from '@/layout/Container';
import InputComponent from '../Input/Input.component';
import { Typography } from '@material-ui/core';
import ButtonComponent from '../Button/Button.component';
import useProfile from './UseProfile';
import { profileProps } from '@/types/Profile.types';

const ProfileComponent: FC<profileProps> = ({ user }) => {
  const {
    addressRef,
    landmarkRef,
    cityRef,
    stateRef,
    pincodeRef,
    handleSubmit,
  } = useProfile(user);
  console.log(user);

  return (
    <Container>
      <Typography variant='h5'>Profile</Typography>
      <form className='flex-column' onSubmit={handleSubmit}>
        <InputComponent
          required={false}
          name='Address'
          type='text'
          ref={addressRef}
          defaultValue={user?.address}
        />
        <InputComponent
          required={false}
          name='Landmark'
          type='text'
          ref={landmarkRef}
          defaultValue={user?.landmark}
        />
        <InputComponent
          required={false}
          name='City'
          type='text'
          ref={cityRef}
          defaultValue={user?.city}
        />
        <InputComponent
          required={false}
          name='State'
          type='text'
          ref={stateRef}
          defaultValue={user?.state}
        />
        <InputComponent
          required={false}
          name='Pincode'
          type='text'
          ref={pincodeRef}
          defaultValue={user?.pincode}
        />
        <ButtonComponent>SUBMIT</ButtonComponent>
      </form>
    </Container>
  );
};

export default ProfileComponent;
