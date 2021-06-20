import { Typography } from '@material-ui/core';
import router from 'next/router';
import React from 'react';
import ArrayMap from '../ArrayMap/array-map';
import Recommendation from './recommendation.component';

const RecommendationContainer = ({ product }) => {
  const handleProductOnClick = (id: string) => {
    router.push(`product/${id}`);
  };
  return (
    <>
      {Object.entries(product).map(([name, items]) => (
        <section className='mt-1 mb-1' key={name}>
          <Typography variant='h6' className='mb-1 roboto capitalize'>
            {name}
          </Typography>
          <ArrayMap
            className='flex-row flex-wrap flex-between'
            data={items}
            handleClick={handleProductOnClick}
            Component={Recommendation}
          />
        </section>
      ))}
    </>
  );
};

export default React.memo(RecommendationContainer);
