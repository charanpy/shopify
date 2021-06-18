import React, { useEffect, useContext } from 'react';
import { getSession } from 'next-auth/client';
import Container from '@/layout/Container';
import { AlertContext } from '@/context/Alert/Alert';
import LoginComponent from '@/components/login/login.component';
import dbConnect from 'utils/db';

const Login = ({ error }) => {
  const { openAlert } = useContext(AlertContext);
  console.log('Login render');
  useEffect(() => {
    if (!error) return;
    openAlert({ title: error });
    window.history.replaceState(null, '', '/auth/login');
  }, []);

  return (
    <Container>
      <LoginComponent />
    </Container>
  );
};

export async function getServerSideProps(context) {
  await dbConnect();
  const { error } = context.query;
  const { req } = context;
  const session = await getSession({ req });
  if (session?.user) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  return {
    props: {
      data: 'hi',
      error: error || null,
    },
  };
}
export default Login;
