import { useEffect } from 'react';
import axios from 'axios';

export default function Index() {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      axios
        .get('/api/current-user', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
        });
    }
  }, []);
  return <div className='container mx-auto'>NextApp</div>;
}
