import { useState } from 'react';
import Formulario from './components/Formulario'
import Parag from './components/Parag';
import './App.css';
import Button from './components/Button';

function App() {
  const [str, setStr] = useState('')

  const [nome, setNome] = useState([])

  const setUpper = (value) =>{
    setStr(value.toUpperCase())
  }

  return (
    <div className="App">
      <header className="App-header">         
        <Parag>insira nome: {str}</Parag>
        {nome.map((item, index) => <Parag key={index}>{item}</Parag>)}

        <Formulario setNome={setNome} str={str} setUpper={setUpper} nome={nome}/>
        <Button func={() => setNome(nome.filter(item => item.length > 3))}>Filtrar</Button>
        {/* {nome.length > 0 && nome.reduce((atual, anterior) => atual * anterior.length, 1)} */}

        {/* {nome.length > 0 && nome.filter(item => item.includes(str))} */}
      </header>
    </div>
  );
}

export default App;
