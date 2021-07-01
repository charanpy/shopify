import React from 'react';
import axios from 'axios';
import { MailOutline } from '@material-ui/icons';
import Container from '@/layout/Container';
import InputComponent from '@/components/Input/Input.component';
import Button from '@/components/Button/Button.component';
import AuthHeader from '@/components/AuthHeader/auth-header';
import GoogleSignIn from '@/components/Google/Google-signIn';
import { AlertContext } from '@/context/Alert/Alert';
import { isEmailValid } from 'utils/credential-validation';
import { withSession } from '@/components/Session/with-session.component';
import Seo from '@/components/seo/Seo';

const Register: React.FC = () => {
  const emailRef = React.useRef(null);
  const { openAlert } = React.useContext(AlertContext);
  const [disable, setDisable] = React.useState(false);

  const handleRegister = async (e: React.SyntheticEvent) => {
    const email = emailRef?.current?.value;

    e.preventDefault();
    console.log('reg', email);
    if (!email || (email && isEmailValid(email)))
      openAlert({ title: 'Invalid email' });

    await axios
      .post(`${process.env.URL}/api/auth/register`, { email })
      .then(() => setDisable((disable) => !disable))
      .catch((error) => {
        openAlert({
          title:
            error?.response?.data?.message ||
            'Something went wrong!Please try again',
        });
      });
  };

  return (
    <>
      <Seo title='Register' url='/auth/register' />
      <Container>
        <AuthHeader page='Register' />
        {disable && (
          <div className='mb-1'>
            <p className='custom success f-500'>
              Confirmation link is sent to{' '}
              <a href='https://gmail.com'>{emailRef?.current?.value}</a>
            </p>
          </div>
        )}
        <form className='flex-column flex-center' onSubmit={handleRegister}>
          <InputComponent name='Email' type='email' ref={emailRef}>
            <MailOutline />
          </InputComponent>
          <Button disabled={disable}>Send Mail</Button>
        </form>
        <GoogleSignIn />
      </Container>
    </>
  );
};

export default withSession(Register, true);
