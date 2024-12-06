import React from 'react';
import { useState, useEffect } from 'react';

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
    return(
        <div>
            <button onClick={() => {
                setTela(<Consulta setTela={setTela} />)
            }}>Cadastrar</button>
        </div>
    )
}

export default Cliente