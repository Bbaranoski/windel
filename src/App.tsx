import React, { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import Inicio from './inicio';
import Cliente from './cliente';
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { TbBorderCorners } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from "./image/logo.webp"

const App: React.FC = () => {
  //função useState que troca a tela renderizada
  const [tela, setTela] = useState<JSX.Element>(<Inicio />)
  //função para colocar a classe select nos botões
  const [selectIndex, setSelectIndex] = useState<number | null>(0)
  const select = (index: number) => {
    setSelectIndex(index)
  }
  //função para definir o tamanho da sidebar com id
  const [recolhe, setRecolhe] = useState<boolean>(false)
  //função para definir tema
  const [tema, setTema] = useState<boolean>(false)
  const cor: string = tema ? 'white' : 'black'
  return (
    <div className={tema === false ? 'claro' : 'escuro'} id={recolhe === false ? '' : 'recolhe'}>

      <div className='header'>
        <div>
          {recolhe ? <IoIosArrowForward size={20} 
          color={cor} 
          className='recolhe'
          onClick={() => {
            setRecolhe(!recolhe)
          }}
          /> : <IoIosArrowBack size={20} 
          color={cor}  
          className='recolhe'
          onClick={() => {
            setRecolhe(!recolhe)
          }}
          />}
          <h1>aaaaaaaaaa</h1>
        </div>
        <div className='icon'>
          {tema ? <IoMoonOutline 
          size={20} 
          color='white'
          onClick={() => {
            setTema(!tema)
          }}
          /> : <IoSunnyOutline 
          size={20} 
          color='black'
          onClick={() => {
            setTema(!tema)
          }}
          />}
          <FaRegStar size={20} color={cor} />
          <FiBell size={20} color={cor} /> 
          <BsGear size={20} color={cor} />
          <TbBorderCorners size={20} color={cor} />
        </div>
      </div>

      <div className='side'>
        <div className='logo'>
        <img src={logo} alt="windel logo" />
          <h1>WINDEL</h1>
        </div>
        <button
          id={selectIndex === 0 ? 'select' : ''}
          onClick={() => {
            select(0)
            setTela(<Inicio />)
        }}><HiOutlineHome size={20} color={cor} /><p>Home</p></button>
        <button 
          id={selectIndex === 1 ? 'select' : ''}
          onClick={() => {
            select(1)
            setTela(<Cliente />)
        }}>< GoPerson size={20} color={cor} /><p>Cliente</p></button>
      </div>
      
      {/*conteudo principal da pagina, variavel do useState*/}
       {tela}

    </div>
  )
}

export default App;
