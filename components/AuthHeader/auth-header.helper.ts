const getPageDetails = (page: string) => {
  if (page === 'Login') {
    return {
      link: `/auth/register`,
      heading: 'Welcome back',
      navigate: "Don't have an account? ",
      navigateText: 'Register',
    };
  }
  return {
    link: `/auth/login`,
    heading: 'Create Your Account',
    navigate: 'Already have an account? ',
    navigateText: 'Login',
  };
};

export default getPageDetails;
