import { signIn } from 'next-auth/client';
import React from 'react';
import Button from '../Button/Button.component';

const GoogleSignIn = () => {
  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <>
      <div className='flex-column flex-center mb-1 mt-1'>
        <p className='custom f-300'>OR</p>
        <Button handleClick={handleGoogleSignIn} google type='button'>
          Continue with Google
        </Button>
      </div>
    </>
  );
};

export default GoogleSignIn;
