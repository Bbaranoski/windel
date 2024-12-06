import React from 'react';
import { useState, useEffect } from 'react';

const cliente: object[] = []

const Cliente: React.FC = () => {
    const [tela, setTela] = useState<JSX.Element>(<></>)
    useEffect(() => {
        setTela(<Consulta setTela={setTela}/>)
    }, [])
    return <>{tela}</>
}

interface Props {
    setTela: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const Consulta: React.FC<Props> = ({ setTela }) => {
    return(
        <div>
            <div>

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
    const [pessoa, setPessoa] = useState<object>({
        name: ""
    })
    return(
        <div>
            <form action="get">
                <label htmlFor="name">Nome:</label>
                <input type="text" required
                name='name' id='name' onChange={(e) => {
                    setPessoa({name: e.target.value})
                }}/>
                <button onClick={() => {
                    cliente.push({pessoa})
                    console.log(cliente)
                    setTela(<Consulta setTela={setTela} />)
                }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Cliente