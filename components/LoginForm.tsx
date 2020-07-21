import axios from 'axios';
import { Input, Label } from './styles';
import { SecondaryButton } from 'components/Button';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      setEmail('');
      setPassword('');
      const token = response.data.data.token;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className='w-6/12 mx-auto border border-gray-200 rounded p-6 shadow-sm mt-5'
      onSubmit={handleSubmit}
    >
      <h1 className='text-4xl text-center leading-relaxed'>Login</h1>
      <div className='my-1'>
        <Label>Email</Label>
        <Input
          type='text'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div className='my-1'>
        <Label>Password</Label>
        <Input
          type='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <SecondaryButton type='submit' className='mt-1'>
        Login
      </SecondaryButton>
    </form>
  );
};
