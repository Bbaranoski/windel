import React from 'react';
import { useState } from 'react';

const Cliente: React.FC = () => {

    const [cadastro, setCadastro] = useState(<Consulta />)
    return cadastro
}

const Consulta: React.FC = () => {
    return(
        <div>
            <div>

            </div>
            <div>
                <button>TESTE</button>
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