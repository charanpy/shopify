import Product from '@/models/Product.model';
import dbConnect from '@/utils/db';
import React from 'react';

const Orders = ({ men, women }) => {
  console.log(men, women);

  return <div>Orders</div>;
};

export const getStaticProps = async () => {
  const data = [
    {
      name: 'Playstation DualSense Wireless Controller ',
      image: 'https://m.media-amazon.com/images/I/612bjwBuobS._AC_UY218_.jpg',
      description:
        'Haptic feedback Adaptive triggers Built in microphone and headset jack',
      brand: 'ps',
      price: 3000,
      category: '60cc7d9ce6df3d3c6008b708',
    },
    {
      name: 'Xbox console',
      image: 'https://m.media-amazon.com/images/I/611NsnmzP+L._AC_UY218_.jpg',
      description:
        'Spatial Audio Bring your games and movies to life with immersive audio through Dolby Atmos and DTS.Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon, Hulu, and more',
      brand: 'xbox',
      price: 43000,
      category: '60cc7d9ce6df3d3c6008b708',
    },
    {
      name: 'call of duty',
      brand: 'xbox',
      image: 'https://m.media-amazon.com/images/I/81dWbLERrNL._AC_UY218_.jpg',
      price: 900,
      category: '60cc7d9ce6df3d3c6008b708',
    },

    {
      name: 'game desk',
      image: 'https://m.media-amazon.com/images/I/71NI5H-JUzS._AC_UY218_.jpg',
      description:
        'Skin friendly and wear-resisting PU leather for years of use, high quality filler bring better feels, Class 3 gas lift verified by SGS, durable,reliable and supports',
      price: 2500,
      category: '60cc7d9ce6df3d3c6008b708',
    },
    {
      name: 'gta5',
      image: 'https://m.media-amazon.com/images/I/61rAZbhTV4L._AC_UY218_.jpg',
      brand: 'xbox',
      price: 1500,
      category: '60cc7d9ce6df3d3c6008b708',
    },
    {
      name: 'watch dogs',
      image: 'https://m.media-amazon.com/images/I/81WAdmdj+LL._AC_UY218_.jpg',
      brand: 'ps',
      price: 800,
      category: '60cc7d9ce6df3d3c6008b708',
    },
  ];
  // await Product.insertMany(data);
  return {
    props: { data: null },
  };
};

export default Orders;
