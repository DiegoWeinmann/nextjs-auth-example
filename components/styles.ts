import tw from 'twin.macro';
import styled from 'styled-components';

export const Label = tw.label`block text-sm font-semibold`;

export const Input = styled.input`
  ${tw`bg-gray-200 text-gray-400 outline-none focus:bg-gray-300 focus:text-gray-700 transition-colors duration-700 rounded p-2 my-1 w-full`}
`;
