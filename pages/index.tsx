import Head from 'next/head';

const Home: React.FC = () => <div>hi</div>;

export const getServerSideProps = async () => {
  return {
    props: {
      data: null,
    },
  };
};

export default Home;
