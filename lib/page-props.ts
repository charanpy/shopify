export const dataProps = (name: string, data) => ({
  props: {
    [name]: data,
    data: null,
  },
});

export const notFound = () => {
  console.log('not f');
  return {
    notFound: true,
  };
};
