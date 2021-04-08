import React from 'react';


const Quartos = () => {
  // controle de estado LOCAL
  // const [valorAtual, funçãoQueMudaOValor] = React.useState();
  const [ name, setName ] = React.useState("Primaricoisa");

  return (
    
      <div className='quartos'>
        {name}
        <ul>
          <li>Quarto Individual</li>
          <li>Quarto Casal</li>
          <li>Quarto Bacanal</li>
        </ul>
        <hr />

        <button onClick={() => setName('teste')}>
          botão para mudar o nome
        </button>
      </div>      
    
  )
}

export default Quartos;