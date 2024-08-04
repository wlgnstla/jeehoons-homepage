import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  transition: transform 03s ease-in-out;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: rotate(10deg);
  }
`;

const Logo = () => {
  const narutoImg = `/images/naruto${useColorModeValue('-darks', '')}.svg`;

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Image src={narutoImg} width={20} height={20} alt='logo' />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c'
            fontWeight='bold'
            ml={3}
          >
            Jeehoon Sim
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;

