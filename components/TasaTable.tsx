import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from './styles';
import { ITasa } from 'models/Tasa';

export const TasaTable = () => {
  const [tasas, setTasas] = useState<ITasa[]>([]);
  useEffect(() => {
    axios
      .get<{ data: ITasa[] }>('/api/tasas', {
        headers: { authorization: JSON.parse(localStorage.getItem('token')) },
      })
      .then((response) => {
        console.log(response.data);
        setTasas(response.data.data);
      });
  }, []);
  return (
    <div className='w-2/3 mx-auto'>
      <div className='bg-white shadow-lg rounded my-6'>
        <Table.TableWrapper>
          <Table.TableHead>
            <Table.TableHeadRow>
              <Table.TableHeadCell>Tasa</Table.TableHeadCell>
              <Table.TableHeadCell>
                Plazo <span className='font-light italic'>(días)</span>
              </Table.TableHeadCell>
              <Table.TableHeadCell>Segmento</Table.TableHeadCell>
            </Table.TableHeadRow>
          </Table.TableHead>
          <Table.TableBody>
            {tasas?.map((tasa) => (
              <Table.TableBodyRow key={tasa._id}>
                <Table.TableBodyCell className='text-left font-bold'>
                  {tasa.tasa}%
                </Table.TableBodyCell>
                <Table.TableBodyCell>{tasa.plazo}</Table.TableBodyCell>
                <Table.TableBodyCell>{tasa.segmento}</Table.TableBodyCell>
              </Table.TableBodyRow>
            ))}
          </Table.TableBody>
        </Table.TableWrapper>
      </div>
    </div>
  );
};
