import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
  content?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  center = true,
  content = true,
}) => {
  return (
    <main className={`container flex-column ${center ? 'flex-center' : ''}`}>
      <section className={`mt-20 mr ${content && 'flex-column flex-center'}`}>
        {children}
      </section>
    </main>
  );
};

export default Container;
