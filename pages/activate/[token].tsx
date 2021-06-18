import React, { useEffect, useRef, useContext } from 'react';
import activateAccount from '../../utils/decode-token';
import { AccountCircle, Lock } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { isPasswordValid } from '../../utils/credential-validation';
import { getSession } from 'next-auth/client';
import { AlertContext } from '@/context/Alert/Alert';
import Container from '@/layout/Container';
import AuthHeader from '@/components/AuthHeader/auth-header';
import InputComponent from '@/components/Input/Input.component';
import Button from '@/components/Button/Button.component';
import axios from 'axios';

const VerifyEmail = ({ email, user }) => {
  const { openAlert } = useContext(AlertContext);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace('/auth/login');
      return;
    }
    if (!email) {
      openAlert({
        title: 'Confirmation link is expired.Please register again',
      });
      router.replace('/auth/register');
      return;
    }
    return;
  }, []);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const username = usernameRef?.current?.value;
    const password = passwordRef?.current?.value;
    if (!username || username.length < 2) {
      openAlert({ title: 'Username should be min of 2 characters' });
      return;
    }
    if (!password || (password && isPasswordValid(password))) {
      openAlert({
        title:
          'Password should atleast contain one special character,one uppercase character and minimum length of 8',
      });
      return;
    }
    axios
      .post(`${process.env.URL}/api/auth/create-account`, {
        password,
        email,
        username,
      })
      .then((res) => {
        const { email } = res.data;
        if (email) {
          openAlert({
            variant: 'success',
            title: 'Registered successfully.Please login',
          });
          router.replace('/auth/login');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container>
      <AuthHeader page='Register' header={`Welcome ${email && email}`} />
      <form onSubmit={onRegister} className='flex-column flex-center'>
        <InputComponent type='name' name='Username' ref={usernameRef}>
          <AccountCircle />
        </InputComponent>
        <InputComponent type='password' name='Password' ref={passwordRef}>
          <Lock />
        </InputComponent>
        <Button>Create Account</Button>
      </form>
    </Container>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { token } = query;
  const session = await getSession({ req });
  if (session?.user) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  const email = await activateAccount(token);
  if (!email) {
    return {
      props: {
        email: null,
        user: session?.user || null,
      },
    };
  }
  return {
    props: {
      email,
      user: session?.user || null,
    },
  };
};

export default VerifyEmail;
