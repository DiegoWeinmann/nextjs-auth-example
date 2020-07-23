import { useContext, useEffect } from 'react';
import { UserContext, UserContextDispatch } from './userContext';
import { useRouter } from 'next/router';

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('User context is undefined.');
  }
  return context;
};

export const useUserContextDispatch = () => {
  const context = useContext(UserContextDispatch);
  if (context === undefined) {
    throw new Error('User context dispatch is undefined.');
  }
  return context;
};

export const usePrivateRoute = () => {
  const router = useRouter();
  const { user } = useUserContext();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);
};
