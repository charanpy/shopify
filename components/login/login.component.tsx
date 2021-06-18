import React, { useRef } from 'react';
import { signIn } from 'next-auth/client';
import { EmailOutlined, Visibility } from '@material-ui/icons';
import InputComponent from '@/components/Input/Input.component';
import Button from '@/components/Button/Button.component';
import GoogleSignIn from '@/components/Google/Google-signIn';
import AuthHeader from '@/components/AuthHeader/auth-header';
import axios from 'axios';

const LoginComponent = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    console.log(email, password);
    if (!email || !password) return;
    signIn('login', { email, password });
  };

  return (
    <>
      <AuthHeader page='Login' />
      <form className='flex-column' onSubmit={handleLogin}>
        <InputComponent name='Email' type='email' ref={emailRef}>
          <EmailOutlined color='primary' />
        </InputComponent>
        <InputComponent name='Password' type='password' ref={passwordRef}>
          <Visibility color='primary' />
        </InputComponent>
        <Button>LOGIN</Button>
        <GoogleSignIn />
      </form>
    </>
  );
};

export default LoginComponent;
