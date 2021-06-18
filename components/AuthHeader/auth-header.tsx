import React from 'react';
import Link from 'next/link';
import useStyles from '@/styles/style';
import getPageData from './auth-header.helper';

interface AuthHeaderProps {
  page: string;
  header?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ page, header }) => {
  const classes = useStyles();
  const { link, heading, navigate, navigateText } = getPageData(page);
  return (
    <div className={`${classes.header} flex-column flex-center`}>
      <h1 className='custom f-500 mb-1'>{header || heading}</h1>
      <div className={classes.register}>
        <p className={`custom`}>
          {navigate} <Link href={link}>{navigateText}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthHeader;
