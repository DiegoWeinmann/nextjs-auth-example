import { useState } from 'react';
import axios from 'axios';
import { InputControl, TasaButton, TasaInput } from './styles';

export const TasaForm = () => {
  const [tasa, setTasa] = useState<string>('');
  const [plazo, setPlazo] = useState<string>('');
  const [segmento, setSegmento] = useState<string>('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('/api/tasas', {
        tasa,
        plazo,
        segmento,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className='flex flex-col mx-auto my-16 w-1/2 align-center justify-center'
      onSubmit={handleSubmit}
    >
      <InputControl>
        <TasaInput
          type='text'
          value={tasa}
          placeholder='tasa'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTasa(e.target.value)
          }
        />
      </InputControl>
      <InputControl>
        <TasaInput
          type='text'
          value={plazo}
          placeholder='plazo'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPlazo(e.target.value)
          }
        />
      </InputControl>
      <InputControl>
        <TasaInput
          type='text'
          value={segmento}
          placeholder='segmento'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSegmento(e.target.value)
          }
        />
      </InputControl>
      <TasaButton className='mt-3'>Crear</TasaButton>
    </form>
  );
};
