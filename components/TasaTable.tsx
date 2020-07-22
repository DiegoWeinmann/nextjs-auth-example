import { Table } from './styles';

export const TasaTable = () => {
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
            <Table.TableBodyRow>
              <Table.TableBodyCell>10%</Table.TableBodyCell>
              <Table.TableBodyCell>10</Table.TableBodyCell>
              <Table.TableBodyCell>3</Table.TableBodyCell>
            </Table.TableBodyRow>
          </Table.TableBody>
        </Table.TableWrapper>
      </div>
    </div>
  );
};
