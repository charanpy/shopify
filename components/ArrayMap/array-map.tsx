import React from 'react';

const ArrayMap = (props) => {
  const { data, className, Component, cart } = props;
  const items = data?.map ? data : JSON.parse(data);
  return (
    <ul className={className}>
      {items?.length &&
        items.map((item) => (
          <Component
            item={item}
            {...props}
            key={!cart ? item._id : item.productId._id}
          />
        ))}
    </ul>
  );
};

export default ArrayMap;
