import React from 'react';
import { useState, useEffect } from 'react';
import './cliente.css'

//array que segura os dados dos clientes cadastrado
type teste = {
    nome: string
}
const cliente: teste[] = []
//passa a useState criada dentro de Cliente para outros componentes
interface Props {
    setTela: React.Dispatch<React.SetStateAction<JSX.Element>>;
}
//gerencia a tela que sera renderizada
const Cliente: React.FC = () => {
    const [tela, setTela] = useState<JSX.Element>(<></>)
    useEffect(() => {
        setTela(<Consulta setTela={setTela}/>)
    }, [])
    return <>{tela}</>
}
//pega os objetos dentro da array cliente e renderiza
const Consulta: React.FC<Props> = ({ setTela }) => {
    return(
        <div className='cadastro'>
            <div>
                <button onClick={() => {
                    setTela(<Cadastro setTela={setTela} />)
                }}>+</button>
            </div>
            <div className='consultaCliente'>
                {cliente.map((item, index) => (
                    <p key={index}>{item.nome}</p>
                ))}
            </div>
        </div>
    )
}
//paga o valor dos inputs e coloca dentro da array cliente
const Cadastro: React.FC<Props> = ({ setTela }) => {
    const [pessoa, setPessoa] = useState<teste | null>(null)
    return(
        <div>
            <form action="get">
                <label htmlFor="name">Nome:</label>
                <input type="text"
                required
                name='name' 
                id='name' 
                onChange={(e) => {
                    setPessoa({nome: e.target.value})
                }}/>
                <button type="submit" 
                onClick={(e) => {
                    e.preventDefault()
                    if(pessoa != null){
                        cliente.push(pessoa)
                        setTela(<Consulta setTela={setTela}/>)
                    }
                }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Cliente