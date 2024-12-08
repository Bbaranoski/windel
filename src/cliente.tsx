import React from 'react';
import { useState, useEffect } from 'react';

type teste = {
    nome: string
}

const cliente: teste[] = []

interface Props {
    setTela: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const Cliente: React.FC = () => {
    const [tela, setTela] = useState<JSX.Element>(<></>)
    useEffect(() => {
        setTela(<Consulta setTela={setTela}/>)
    }, [])
    return <>{tela}</>
}

const Consulta: React.FC<Props> = ({ setTela }) => {
    console.log(cliente)
    return(
        <div>
            <div>
                {cliente.map((item, index) => (
                    <p key={index}>{item.nome}</p>
                ))}
            </div>
            <div>
                <button onClick={() => {
                    setTela(<Cadastro setTela={setTela} />)
                }}>TESTE</button>
            </div>
        </div>
    )
}

const Cadastro: React.FC<Props> = ({ setTela }) => {
    const [pessoa, setPessoa] = useState<teste>({nome: ""})
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
                <button type="button" 
                onClick={() => {
                    cliente.push(pessoa)
                    setTela(<Consulta setTela={setTela} />)
                }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Cliente