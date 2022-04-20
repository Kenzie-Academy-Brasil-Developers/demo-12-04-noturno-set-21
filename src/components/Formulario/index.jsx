import Button from '../Button'
import Input from '../Input'

import { useState, useEffect } from 'react'
import Parag from '../Parag'

const Formulario = ({setNome, str, setUpper, nome}) =>{

    const [mensagem, setMensagem] = useState('Criou')
    const [aviso, setAviso] = useState(false)

    useEffect(() => {
        if(nome.length > 0){
            setMensagem('Atulizou')
        }
    }, [nome])

    return (
        <>
        <Input setUpper={setUpper}/>
        <Button func={() => setNome([...nome, str])}>Adiciona nome</Button>
        <Button func={() => setAviso(!aviso)}>aparecer mensagem</Button>

        {aviso && <Parag>{mensagem}</Parag>}

        </>
    )
}

export default Formulario