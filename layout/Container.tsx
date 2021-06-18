import React, { Component, FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
}

const Container: FC<ContainerProps> = ({ children, center = true }) => {
  return (
    <main className={`container flex-column ${center ? 'flex-center' : ''}`}>
      {children}
    </main>
  );
};

export default Container;
