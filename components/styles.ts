import tw from 'twin.macro';
import styled from 'styled-components';
import { BaseButton } from './Button';

export const Label = tw.label`block text-sm font-semibold`;

export const Input = styled.input`
  ${tw`bg-gray-200 text-gray-400 outline-none focus:bg-gray-300 focus:text-gray-700 transition-colors duration-700 rounded p-2 my-1 w-full`}
`;

const TableHeadRow = tw.tr``;
const TableHeadCell = styled.th`
  ${tw`py-4 px-6 bg-orange-500 font-bold uppercase text-sm text-white   shadow-sm`}
`;

const TableBody = tw.thead`font-light`;

const TableBodyRow = tw.tr`hover:bg-orange-100`;

const TableBodyCell = tw.td`py-4 px-6`;

const TableWrapper = tw.table`text-center w-full border-collapse`;

const TableHead = tw.thead`shadow-md`;

export const Table = {
  TableWrapper,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyCell,
  TableBodyRow,
};

export const InputControl = tw.div`w-full mt-2`;
export const TasaInput = tw.input`px-1 rounded border border-gray-200 w-full focus:border-orange-500 outline-none`;
export const TasaButton = styled(BaseButton)`
  ${tw`bg-orange-500 text-white w-1/4 shadow-md`}
`;
