export const pageProps = (name, data) => {
  if (!data) {
    return {
      props: {
        [name]: [],
      },
    };
  }
  return {
    props: {
      [name]: JSON.stringify(data),
    },
  };
};
