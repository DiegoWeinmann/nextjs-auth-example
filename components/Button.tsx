import tw from 'twin.macro';
import styled from 'styled-components';

export const BaseButton = tw.button`
  py-2 px-3 rounded text-white
`;

export const PrimaryButton = styled(BaseButton)`
  ${tw`bg-teal-700 text-white`}
`;

export const SecondaryButton = styled(BaseButton)`
  ${tw`bg-purple-700 text-white`}
`;
