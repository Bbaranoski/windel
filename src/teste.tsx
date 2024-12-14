import React from 'react';
import { useState } from 'react';
import { Grid, 
GridItem, 
Button, 
Image, 
Flex, 
VStack, 
Group, 
Heading,
IconButton } from '@chakra-ui/react';
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { TbBorderCorners } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Inicio from './inicio';
import Cliente from './cliente';
import logo from "./image/logo.webp";
import { Provider } from './components/ui/provider';

const App: React.FC = () => {
  const [tela, setTela] = useState<JSX.Element>(<Inicio />);
  const [selectIndex, setSelectIndex] = useState<number | null>(0);
  const [recolhe, setRecolhe] = useState<boolean>(false);
  const [tema, setTema] = useState<boolean>(false)

  const select = (index: number) => setSelectIndex(index);

  //variaveis de estilo
  const cor: string = tema ? 'white' : 'black'
  const textColor: string = tema ? 'black' : 'white'
  const redondo: string = '20px'
  return (
    <Provider>
      <Grid templateColumns={'1fr 6fr'}
      templateRows={'1fr 6fr'}
      h={'100vh'}
      gap={'2px'}
      >
        <GridItem colSpan={1} 
        rowSpan={6} 
        bg={cor}
        padding={'1vh'}
        overflow={'hidden'}
        >
          <Group>
            <Image height={'7vh'} src={logo}/>
            <Heading color={textColor}>WINDEL</Heading>
          </Group>
          <VStack>
            <IconButton aria-label='cliente'
            width={'100%'}
            color={textColor}
            bg={cor}
            borderWidth="2px"
            borderColor={textColor}
            borderRadius={redondo}
            onClick={() => setTema(!tema)}
            >
              <HiOutlineHome /> Inicio
            </IconButton>
            <IconButton aria-label='cliente'
            width={'100%'}
            color={textColor}
            bg={cor}
            borderWidth="2px"
            borderColor={textColor}
            borderRadius={redondo}
            onClick={() => setTema(!tema)}
            >
              <GoPerson /> Cliente
            </IconButton>
          </VStack>
        </GridItem>

        <GridItem colSpan={1} 
        rowSpan={1}
        bg={cor}
        >

        </GridItem>
        <GridItem colSpan={1} 
        rowSpan={1}
        bg={cor}
        >

        </GridItem>
      </Grid>
    </Provider>
  );
};

export default App;
