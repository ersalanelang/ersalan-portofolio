import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import ELogoIcon from './icons/elogo';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px 15px; 

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <ELogoIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={1} /* Increased margin-left for more spacing */
        >
          Ersalan Elang Kusuma
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
