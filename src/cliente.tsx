import React from 'react';
import { useState } from 'react';

const Cliente: React.FC = () => {
    const [tela, setTela] = useState<JSX.Element>(<Consulta />)
    return <Consulta setTela={setTela} />
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
                    setTela(<Cadastro />)
                }}>TESTE</button>
            </div>
        </div>
    )
}

const Cadastro: React.FC = () => {
    return(
        <div>
            
        </div>
    )
}

export default Cliente