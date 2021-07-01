import { useSession } from 'next-auth/client';
import router from 'next/router';
import React, { ComponentType } from 'react';

export function withSession<P>(Component: ComponentType<P>, redirect = false) {
  return (props: P) => {
    const [session, loading] = useSession();
    if (loading || typeof window === 'undefined' || window === 'undefined') {
      return null;
    }
    console.log(session, redirect);

    if (!loading && session?.user && redirect) {
      console.log('redirectinbg');
      router.push('/');
    }

    return <Component {...props} session={session} />;
  };
}
