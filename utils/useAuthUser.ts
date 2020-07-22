import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export function useAuthUser() {
  const router = useRouter();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      router.push('/login').then(() => {});
    } else {
      axios
        .get('/api/current-user', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          router.push('/login');
        });
    }
  }, []);
}
